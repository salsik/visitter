<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Responses\Response;
use App\Receptions;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show(Request $request, $userId)
    {
        $user = User::find($userId);

        if ($user) {
            return response()->json($user);
        }

        return response()->json(['message' => 'User not found!'], 404);
    }

    function getUsersForCompany(Request $request)
    {
        $users = [];
        $receptions = Receptions::all();
        $customers = Customer::all();
        foreach ($customers as $customer) {
            if($customer->company_id == $request->id) {
                array_push($users, $customer);
            }
        }
        foreach ($receptions as $reception) {
            if($reception->company_id == $request->id) {
                array_push($users, $reception);
            }
        }
        foreach ($users as $user) {
            $mini = User::where('id', $user->user_id)->get()->first();
            $user['username'] = $mini->username;
            $user['login_id'] = $mini->login_id;
            $user['email'] = $mini->email;
            $user['password'] = $mini->password;
            $user['type'] = $mini->type;
        }
        return Response::respondSuccess([
            'data' => $users
        ]);
    }

    function updateUser(Request $request) {
        if($request->location === 'customer') {
            $customer = Customer::where('id', $request->id)->get()->first();
            $customer->name = $request->name;
            $customer->save();
            $user = User::where('id', $customer->user_id)->get()->first();
            $user->username = $request->username;
            $user->login_id = $request->login_id;
            $user->email = $request->email;
            $user->type = $request->type;
            if( $user->password !== $request->password) {
                $user->password = bcrypt($request->password);
            }
            $user->save();
            return Response::respondSuccess();
        } else {
            $reception = Receptions::where('id', $request->id)->get()->first();
            $reception->name = $request->name;
            $reception->dep_id = $request->dep_id;
            $reception->save();
            $user = User::where('id', $reception->user_id)->get()->first();
            $user->username = $request->username;
            $user->login_id = $request->login_id;
            $user->email = $request->email;
            $user->type = $request->type;
            if( $user->password !== $request->password) {
                $user->password = bcrypt($request->password);
            }
            $user->save();
            return Response::respondSuccess();
        }
    }

    function removeUserForCompany(Request $request)
    {
        $item = User::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }

    function updateOnesignal(Request $request)
    {
        $user = User::where('id', $request->id)->get()->first();
        $user->onesignal_id = $request->onesignal_id;
        $user->save();
        return Response::respondSuccess(['data', $user]);
    }
}
