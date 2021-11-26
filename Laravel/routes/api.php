<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AlumnoController;
use App\Http\Controllers\API\GeneracionController;
use App\Http\Controllers\API\CursoController;
use App\Http\Controllers\API\CalificacionController;
use App\Http\Controllers\API\NotasController;
use App\Http\Controllers\API\CertificadoController;
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

// Rutas para la tabla alumnos
Route::prefix('alumno')->group(function () {
    Route::get('/',[ AlumnoController::class, 'getAll']);
    Route::post('/',[ AlumnoController::class, 'create']);
    Route::delete('/{id}',[ AlumnoController::class, 'delete']);
    Route::get('/{id}',[ AlumnoController::class, 'get']);
    Route::put('/{id}',[ AlumnoController::class, 'update']);
});

// Rutas para la tabla Generaciones
Route::prefix('generacion')->group(function () {
    Route::get('/',[ GeneracionController::class, 'getAll']);
    Route::post('/',[ GeneracionController::class, 'create']);
    Route::delete('/{id}',[ GeneracionController::class, 'delete']);
    Route::get('/{id}',[ GeneracionController::class, 'get']);
    Route::put('/{id}',[ GeneracionController::class, 'update']);
});

// Rutas para la tabla Cursos
Route::prefix('curso')->group(function () {
    Route::get('/',[ CursoController::class, 'getAll']);
    Route::post('/',[ CursoController::class, 'create']);
    Route::delete('/{id}',[ CursoController::class, 'delete']);
    Route::get('/{id}',[ CursoController::class, 'get']);
    Route::put('/{id}',[ CursoController::class, 'update']);
});

// Rutas para la tabla Calificaciones
Route::prefix('calificacion')->group(function () {
    Route::get('/',[ CalificacionController::class, 'getAll']);
    Route::post('/',[ CalificacionController::class, 'create']);
    Route::delete('/{id}',[ CalificacionController::class, 'delete']);
    Route::get('/{id}',[ CalificacionController::class, 'get']);
    Route::put('/{id}',[ CalificacionController::class, 'update']);
});

//Tablas Calificaciones Ana
Route::prefix('notas')->group(function () {
    Route::get('/',[ NotasController::class, 'getAll']);
    Route::post('/',[ NotasController::class, 'create']);
    Route::delete('/{id}',[ NotasController::class, 'delete']);
    Route::get('/{id}',[ NotasController::class, 'get']);
    Route::put('/{id}',[ NotasController::class, 'update']);
});

// Rutas para la tabla Certificado
Route::prefix('certificado')->group(function () {
    Route::get('/',[ CertificadoController::class, 'getAll']);
    Route::post('/',[ CertificadoController::class, 'create']);
    Route::delete('/{id}',[ CertificadoController::class, 'delete']);
    Route::get('/{id}',[ CertificadoController::class, 'get']);
    Route::put('/{id}',[ CertificadoController::class, 'update']);
});

