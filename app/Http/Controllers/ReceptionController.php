<?php

namespace App\Http\Controllers;

use App\Http\Responses\Response;
use App\Receptions;
use Illuminate\Http\Request;

class ReceptionController extends Controller
{
    function getReceptions(Request $request)
    {
        $receptions = Receptions::all()->where('company_id', $request->company_id)->where('dep_id', $request->dep_id)->get()->all();
        return Response::respondSuccess([
            'data' => $receptions
        ]);
    }

    function removeReception(Request $request)
    {
        $item = Receptions::Where('id', $request->id)->get()->first();
        if ($item == null) {
            return Response::respondError(['error', 'File not exist']);
        } else {
            $item->delete();
            return Response::respondSuccess();
        }
    }
}
