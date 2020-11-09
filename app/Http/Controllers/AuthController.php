<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Http\Responses\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        } else {
            try {
                $user = User::create([
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'email' => $request->email,
                    'type' => $request->type,
                    'password' => bcrypt($request->password)
                ]);
                return Response::respondSuccess([
                    $this->getUser($user)
                ]);
            } catch (\Illuminate\Database\QueryException $e) {
                return Response::respondError(['error', $e]);
            }
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return Response::respondError($validator->getMessageBag());
        }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();

            return Response::respondSuccess([
                $this->getUser($user)
            ]);
        } else {
            return Response::respondError('Wrong Email or Password');
        }
    }

    private function getUser($user)
    {
        $token = $user->createToken($user->email . '-' . now());
        return ['token' => $token->accessToken, 'user' => $user];
    }
}
