<?php

namespace App\Http\Controllers;

use App\Company;
use App\Http\Responses\Response;
use App\User;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function getAll()
    {
        $companies = Company::all();
        foreach ($companies as $company) {
            $user = User::where('id', $company->user_id)->get()->first();
            $company['username']= $user->username;
            $company['email']= $user->email;
        }
        return Response::respondSuccess([
            'data' => $companies
        ]);
    }

    public function getCompany(Request $request) {
        $company = Company::where('id', $request->id)->get()->first();
        return Response::respondSuccess([
            'data' => $company
        ]);
    }

    public function removeCompany(Request $request)
    {
        $item = Company::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $user = User::where('id', intval($item->user_id))->get()->first();
            $item->delete();
            $user->delete();
            return Response::respondSuccess();
        }
    }

    public function requestSelfie(Request $request)
    {
        $item = Company::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->request_selfie = $request->request_selfie;
            $item->save();
            return Response::respondSuccess();
        }
    }
}
