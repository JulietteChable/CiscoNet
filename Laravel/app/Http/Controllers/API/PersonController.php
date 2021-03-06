<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Person;
Use Log;

class PersonController extends Controller
{
    
    public function getAll(){
      $data = Person::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['Generacion'] = $request['Generacion'];
      $data['Matricula'] = $request['Matricula'];
      $data['Nombre'] = $request['Nombre'];
      $data['Apellido'] = $request['Apellido'];
      $data['Email'] = $request['Email'];
      $data['Status'] = $request['Status'];
      $data['Curso'] = $request['Curso'];
      $data['Calificacion'] = $request['Calificacion'];
      Person::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Person::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Person::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['Generacion'] = $request['Generacion'];
      $data['Matricula'] = $request['Matricula'];
      $data['Nombre'] = $request['Nombre'];
      $data['Apellido'] = $request['Apellido'];
      $data['Email'] = $request['Email'];
      $data['Status'] = $request['Status'];
      $data['Curso'] = $request['Curso'];
      $data['Calificacion'] = $request['Calificacion'];
      Person::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}

