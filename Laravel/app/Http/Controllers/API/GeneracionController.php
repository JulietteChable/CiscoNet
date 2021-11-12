<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Generacion;
Use Log;

class GeneracionController extends Controller
{
    //
    public function getAll(){
        $data = Generacion::get();
        return response()->json($data, 200);
      }

      public function create(Request $request){
        $data['Generacion'] = $request['Generacion'];

        Generacion::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function delete($id){
        $res = Generacion::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Generacion::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){
        $data['Generacion'] = $request['Generacion'];

        Generacion::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
  }
