<?php

namespace App\Http\Controllers;

use App\Customer;
use App\Http\Responses\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    function getCustomers(Request $request)
    {
        $customers = Customer::all()->where('company_id', $request->company_id)->get();
        return Response::respondSuccess([
            'data' => $customers
        ]);
    }

    function removeCustomer(Request $request)
    {
        $item = Customer::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }
}
