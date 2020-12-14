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
            $company['login_id']= $user->login_id;
            $company['password']= $user->password;
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

    public function updateCompany(Request $request)
    {
        $company = Company::Where('id', $request->id)->get()->first();
        if ($company == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $user = User::Where('id', $request->user_id)->get()->first();
            $company->companyName = $request->companyName;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->login_id = $request->login_id;
            if ($request->password != $user->password)
            {
                $user->password = $request->password;
            }
            $company->save();
            $user->save();
            return Response::respondSuccess();
        }
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
            $item->selfie_message = $request->selfie_message;
            $item->save();
            return Response::respondSuccess();
        }
    }
}
