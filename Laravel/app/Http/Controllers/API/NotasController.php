<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Notas;
Use Log;

class NotasController extends Controller
{
    //
    public function getAll(){
        $data = Notas::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){

        $data['Nombre'] = $request['Nombre'];
        $data['Curso1'] = $request['Curso1'];
        $data['Curso2'] = $request['Curso2'];
        $data['Promedio'] = $request['Promedio'];

        Notas::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function delete($id){
        $res = Notas::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Notas::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){

        $data['Nombre'] = $request['Nombre'];
        $data['Curso1'] = $request['Curso1'];
        $data['Curso2'] = $request['Curso2'];
        $data['Promedio'] = $request['Promedio'];

        Notas::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
