<?php

namespace App\Http\Controllers;

use App\Calls;
use App\Departments;
use App\Http\Responses\Response;
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
                    'number' => $request->number
                ]);
                return Response::respondSuccess([
                    'data' => $department
                ]);
            } catch (\Illuminate\Database\QueryException $e) {
                return Response::respondError(['error', $e]);
            }
        }
    }

    public function getAll()
    {
        $department = Departments::all();
        return Response::respondSuccess([
            'data' => $department
        ]);
    }

    public function getDashboard()
    {
        $depart = Departments::all();
        $calls = Calls::all();
        $data = null;
        $data['department'] = count($depart);
        $data['calls'] = count($calls);
        return Response::respondSuccess([
            'data' => $data
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
