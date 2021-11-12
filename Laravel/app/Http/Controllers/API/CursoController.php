<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Curso;
Use Log;

class CursoController extends Controller
{
    //
    public function getAll(){
        $data = Curso::get();
        return response()->json($data, 200);
      }

      public function create(Request $request){
        $data['Curso'] = $request['Curso'];

        Curso::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function delete($id){
        $res = Curso::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }

      public function get($id){
        $data = Curso::find($id);
        return response()->json($data, 200);
      }

      public function update(Request $request,$id){
        $data['Curso'] = $request['Curso'];

        Curso::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
  }

