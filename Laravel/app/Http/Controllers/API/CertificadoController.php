<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Certificado;
Use Log;

class CertificadoController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
      $data = Certificado::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){
      $data['nombre'] = $request['nombre'];
      $data['estudiante'] = $request['estudiante'];
      $data['escuela'] = $request['escuela'];
      $data['ubicacion'] = $request['ubicacion'];
      $data['fecha'] = $request['fecha'];
      $data['instructor'] = $request['instructor'];
      Certificado::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Certificado::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Certificado::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){
      $data['nombre'] = $request['nombre'];
      $data['estudiante'] = $request['estudiante'];
      $data['escuela'] = $request['escuela'];
      $data['ubicacion'] = $request['ubicacion'];
      $data['fecha'] = $request['fecha'];
      $data['instructor'] = $request['instructor'];
      Certificado::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}
