<?php

namespace App\Http\Controllers;

use App\Calls;
use App\Company;
use App\Customer;
use App\Departments;
use App\Http\Responses\Response;
use App\Receptions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Prophecy\Call\Call;

class DepartmentsController extends Controller
{
    public function createDepartment(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'label' => 'required',
            'number' => 'required'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        } else {
            try {
                $department = Departments::create([
                    'label' => $request->label,
                    'number' => $request->number,
                    'company_id' => $request->company_id
                ]);
                return Response::respondSuccess([
                    'data' => $department
                ]);
            } catch (\Illuminate\Database\QueryException $e) {
                return Response::respondError(['error', $e]);
            }
        }
    }

    public function editDepartment(Request $request)
    {
        try {
            $department = Departments::where('id', $request->id)->get()->first();
            $department->number = $request->number;
            $department->save();
            return Response::respondSuccess([
                'data' => $department
            ]);
        } catch (\Illuminate\Database\QueryException $e) {
            return Response::respondError(['error', $e]);
        }
    }

    public function getAll(Request $request)
    {
        $departments = Departments::all();
        foreach ($departments as $department) {
            $company = Company::Where('id', $department->company_id)->get()->first();
            $department['company'] = $company;
        }
        return Response::respondSuccess([
            'data' => $departments
        ]);
    }

    function getDepartmentsForCompany(Request $request)
    {
        $depart = Departments::where('company_id', $request->id)->get();
        return Response::respondSuccess([
            'data' => $depart
        ]);
    }

    public function getDashboard(Request $request)
    {
        $depart = Departments::where('company_id', $request->id)->get();
        $calls = Calls::where('company_id', $request->id)->get();
        $data = null;
        $data['department'] = count($depart);
        $data['calls'] = count($calls);
        $users = [];
        $receptions = Receptions::all();
        $customers = Customer::all();
        foreach ($customers as $customer) {
            if ($customer->company_id == $request->id) {
                array_push($users, $customer);
            }
        }
        foreach ($receptions as $reception) {
            if ($reception->company_id == $request->id) {
                array_push($users, $reception);
            }
        }
        $data['users'] = count($users);
        return Response::respondSuccess([
            'data' => $data
        ]);
    }

    public function getSuperDashboard()
    {
        $depart = Departments::all();
        $calls = Calls::all();
        $company = Company::all();
        $data = null;
        $data['department'] = count($depart);
        $data['calls'] = count($calls);
        $data['companies'] = count($company);
        return Response::respondSuccess([
            'data' => $data
        ]);
    }

    function getDepartmentById(Request $request)
    {
        $department = Departments::where('id', $request->id)->get()->first();
        return Response::respondSuccess([
            'data' => $department
        ]);
    }

    public function removeDepartment(Request $request)
    {
        $item = Departments::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }
}
