<?php

namespace App\Http\Controllers;

use App\Calls;
use App\Company;
use App\Departments;
use App\Http\Responses\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CallsController extends Controller
{
    public function addCall(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'note' => 'required',
            'image' => 'required',
            'company_id' => 'required',
            'dep_id' => 'required'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        } else {
            $cover = $request->file('image');
            $extension = $cover->getClientOriginalExtension();
            Storage::disk('public')->put($cover->getFilename() . '.' . $extension, File::get($cover));

            $slider = Calls::create([
                'image' => $cover->getFilename() . '.' . $extension,
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


    public function removeCall(Request $request) {
        $item = Calls::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }
}
