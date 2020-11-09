<?php

use http\Client\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
Route::get('department/getAll', 'DepartmentsController@getAll');
Route::post('calls/add', 'CallsController@addCall');

Route::middleware('auth:api')->group(function () {
    Route::post('department/add', 'DepartmentsController@createDepartment');
    Route::get('department/remove', 'DepartmentsController@removeDepartment');
    Route::get('dashboard', 'DepartmentsController@getDashboard');
    Route::get('calls/getAll', 'CallsController@getAll');
    Route::get('calls/remove', 'CallsController@removeCall');
});

Route::get('storage/{filename}', function ($filename)
{
    $path = storage_path('public/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
