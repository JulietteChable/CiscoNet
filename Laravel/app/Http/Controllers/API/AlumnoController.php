<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Alumno;
Use Log;

class AlumnoController extends Controller
{

    public function getAll(){
      $data = Alumno::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['Generacion'] = $request['Generacion'];
      $data['Matricula'] = $request['Matricula'];
      $data['Nombre'] = $request['Nombre'];
      $data['Apellido'] = $request['Apellido'];
      $data['Status'] = $request['Status'];
      $data['Curso'] = $request['Curso'];
      $data['Ccna1'] = $request['Ccna1'];
      $data['Ccna2'] = $request['Ccna2'];
      $data['Final'] = $request['Final'];
      Alumno::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Alumno::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Alumno::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['Generacion'] = $request['Generacion'];
      $data['Matricula'] = $request['Matricula'];
      $data['Nombre'] = $request['Nombre'];
      $data['Apellido'] = $request['Apellido'];
      $data['Status'] = $request['Status'];
      $data['Curso'] = $request['Curso'];
      $data['Ccna1'] = $request['Ccna1'];
      $data['Ccna2'] = $request['Ccna2'];
      $data['Final'] = $request['Final'];
      Alumno::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
