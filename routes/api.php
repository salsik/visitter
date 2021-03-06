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
Route::post('login_user', 'AuthController@loginUser');

Route::middleware('auth:api')->group(function () {
    Route::post('company/updateRegister', 'CompanyController@updateCompany');
    Route::post('department/add', 'DepartmentsController@createDepartment');
    Route::get('department/getAllForCompany', 'DepartmentsController@getDepartmentsForCompany');
    Route::get('department/getAll', 'DepartmentsController@getAll');
    Route::post('department/updateAll', 'DepartmentsController@updateDepartment');
    Route::get('department/remove', 'DepartmentsController@removeDepartment');
    Route::post('department/update', 'DepartmentsController@editDepartment');
    Route::get('department/getById', 'DepartmentsController@getDepartmentById');
    Route::get('dashboard', 'DepartmentsController@getDashboard');
    Route::get('adminDashboard', 'DepartmentsController@getSuperDashboard');
    Route::post('calls/add', 'CallsController@addCall');
    Route::get('calls/getAll', 'CallsController@getAll');
    Route::get('calls/getAllForCompany', 'CallsController@getAllForCompany');
    Route::get('calls/remove', 'CallsController@removeCall');
    Route::get('customer/getAll', 'CustomerController@getCustomers');
    Route::get('customer/remove', 'CustomerController@removeCustomer');
    Route::get('receptions/getAll', 'ReceptionController@getReceptions');
    Route::get('receptions/remove', 'ReceptionController@removeReception');
    Route::get('company/getAll', 'CompanyController@getAll');
    Route::get('company/remove', 'CompanyController@removeCompany');
    Route::get('company/getCompany', 'CompanyController@getCompany');
    Route::post('company/updateSelfie', 'CompanyController@requestSelfie');
    Route::get('users/getAllForCompany', 'UserController@getUsersForCompany');
    Route::get('users/remove', 'UserController@removeUserForCompany');
    Route::post('users/update', 'UserController@updateUser');
    Route::get('users/updateNotification', 'UserController@updateOnesignal');
    Route::get('users/sendNotification', 'CallsController@sendNotification');
});

Route::get('storage/{filename}', function ($filename) {
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
