<?php

namespace App\Http\Controllers;

use App\Company;
use App\Customer;
use App\Departments;
use App\Receptions;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Responses\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        } else {
            try {
                $user = User::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'type' => $request->type,
                    'password' => bcrypt($request->password)
                ]);
                if ($user->type === 'admin') {
                    $company = Company::create([
                        'companyName' => $request->companyName,
                        'user_id' => $user->id,
                    ]);
                } else if ($user->type === 'customer') {
                    $name = $user->first_name . ' ' . $user->last_name;
                    $customer = Customer::create([
                        'name' => $name,
                        'company_id' => $request->company_id,
                        'user_id' => $user->id,
                    ]);
                } else if ($user->type === 'reception') {
                    $reception = Receptions::create([
                        'company_id' => $request->company_id,
                        'dep_id' => $request->dep_id,
                        'user_id' => $user->id,
                    ]);
                }
                return Response::respondSuccess([
                    $this->getUser($user)
                ]);
            } catch (\Illuminate\Database\QueryException $e) {
                return Response::respondError(['error', $e]);
            }
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            return Response::respondSuccess([
                $this->getUser($user)
            ]);
        } else {
            return Response::respondError('Wrong Email or Password');
        }
    }

    private function getUser($user)
    {
        if ($user->type === 'super_admin') {
            // do nothing
        } else if ($user->type === 'admin') {
            $admins = Company::all();
            foreach ($admins as $admin) {
                if ($admin->user_id == $user->id) {
                    $user->companyName = $admin->companyName;
                }
            }
        } else if ($user->type === 'customer') {
            $customers = Customer::all();
            foreach ($customers as $customer) {
                if ($customer->user_id == $user->id) {
                    $companies = Company::all();
                    foreach ($companies as $company) {
                        if ($company->id == $customer->company_id) {
                            $user->company = $company;
                        }
                    }
                }
            }
        } else if ($user->type === 'reception') {
            $receptions = Receptions::all();
            foreach ($receptions as $reception) {
                if ($reception->user_id == $user->id) {
                    $companies = Company::all();
                    foreach ($companies as $company) {
                        if ($company->id == $reception->company_id) {
                            $user->company = $company;
                        }
                    }
                    $departments = Departments::all();
                    foreach ($departments as $department) {
                        if ($department->id == $reception->dep_id) {
                            $user->department = $department;
                        }
                    }
                }
            }
        }
        $token = $user->createToken($user->email . '-' . now());
        return ['token' => $token->accessToken, 'user' => $user];
    }
}
