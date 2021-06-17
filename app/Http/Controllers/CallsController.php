<?php

namespace App\Http\Controllers;

use App\Calls;
use App\Company;
use App\Departments;
use App\Receptions;
use App\User;
use App\Http\Responses\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use OneSignal;

class CallsController extends Controller
{
    public function addCall(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'note' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,pdf,tiff,svg,ai,psd',
            'company_id' => 'required',
            'dep_id' => 'required'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        } else {
            $cover = $request->file('image');
            $fileName = "vissiter-" . time() . "";
            $extension = $cover->getClientOriginalExtension();
            Storage::disk('public')->put($fileName . '.' . $extension, File::get($cover));

            /*
             // $image = base64_decode($request->image);
             $cover = $request->file('image');
             // $cover = $image;
             $fileName = "vissiter-".time()."";
             $extension ='jpg';
             Storage::disk('public')->put($fileName .'.' . $extension, $cover);*/

            $slider = Calls::create([
                'image' => $fileName . '.' . $extension,
                'note' => $request->note,
                'company_id' => $request->company_id,
                'dep_id' => $request->dep_id
            ]);
            return Response::respondSuccess([
                'data' => $slider->withFullUrl()
            ]);
        }
    }

    public function getAll(Request $request)
    {
        $itemsCount = $request->get('itemsCount') ?: 10;
        $calls = Calls::paginate($itemsCount);
        foreach ($calls as $call) {
            $department = Departments::Where('id', $call->dep_id)->get()->first();
            $company = Company::Where('id', $call->company_id)->get()->first();
            $call = $call->withFullUrl();
            $call['department'] = $department;
            $call['company'] = $company;
        }
        return Response::respondSuccess([
            'data' => $calls
        ]);
    }

    public function getAllForCompany(Request $request)
    {
        $itemsCount = $request->get('itemsCount') ?: 10;
        $calls = Calls::where('company_id', $request->id)->paginate($itemsCount);
        foreach ($calls as $call) {
            $department = Departments::Where('id', $call->dep_id)->get()->first();
            $call = $call->withFullUrl();
            $call['department'] = $department;
        }
        return Response::respondSuccess([
            'data' => $calls
        ]);
    }


    public function removeCall(Request $request)
    {
        $item = Calls::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }

    public function sendNotification(Request $request)
    {
        $department = Departments::where('id', $request->id)->get()->first();
        $receptions = Receptions::where('company_id', $department->company_id)->where('dep_id', $department->id)->get()->all();
        foreach ($receptions as $reception) {
            $user = User::where('id', $reception->user_id)->get()->first();
            $userId = $user->onesignal_id;
            $fields['include_player_ids'] = [$userId];
            $message = 'Hey ! You have a call !!!';
            \OneSignal::sendPush($fields, $message);
        }
        return Response::respondSuccess();
    }

    public function getCompanies()
    {
        $companies = Company::all();
        return Response::respondSuccess([
            'data' => $companies
        ]);
    }
}
