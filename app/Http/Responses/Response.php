<?php

namespace App\Http\Responses;

class Response {
    /**
     * @param array $content
     * @return \Illuminate\Http\JsonResponse
     */
    public static function respondSuccess($content = null){
        return response()->json([
            'result' => 'success',
            'content' => $content,
            'error_description' => '',
            'error_code' => 0
        ]);
    }

    public static function respondError($message){
        return response()->json([
            'result' => 'error',
            'content' => null,
            'error_description' => $message,
            'error_code' => 1
        ]);
    }

    public static function respondOut($message){
        return response()->json([
            'result' => 'error',
            'content' => null,
            'error_description' => $message,
            'error_code' => -1
        ]);
    }
}