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
            $user['first_name'] = $mini->first_name;
            $user['last_name'] = $mini->last_name;
            $user['type'] = $mini->type;
        }
        return Response::respondSuccess([
            'data' => $users
        ]);
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
}
