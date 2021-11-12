<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Calificacion;
Use Log;


class CalificacionController extends Controller
{
    //
    public function getAll(){
        $data = Calificacion::get();
        return response()->json($data, 200);
      }

      public function create(Request $request){

        $data['Nombre'] = $request['Nombre'];
        $data['Modulo1'] = $request['Modulo1'];
        $data['Modulo2'] = $request['Modulo2'];
        $data['Final'] = $request['Final'];

        Calificacion::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function delete($id){
        $res = Calificacion::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Calificacion::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){

        $data['Nombre'] = $request['Nombre'];
        $data['Modulo1'] = $request['Modulo1'];
        $data['Modulo2'] = $request['Modulo2'];
        $data['Final'] = $request['Final'];

        Calificacion::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
  }


