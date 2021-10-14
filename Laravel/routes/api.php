<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AlumnoController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('alumno')->group(function () {
    Route::get('/',[ AlumnoController::class, 'getAll']);
    Route::post('/',[ AlumnoController::class, 'create']);
    Route::delete('/{id}',[ AlumnoController::class, 'delete']);
    Route::get('/{id}',[ AlumnoController::class, 'get']);
    Route::put('/{id}',[ AlumnoController::class, 'update']);
});