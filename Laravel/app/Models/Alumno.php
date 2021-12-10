<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;

    protected $table = "alumno";

    protected $fillable = [

      'Generacion',
      'Matricula',
      'Nombre',
      'Apellido',
      'Email',
      'Status',
      'Curso'
    ];

    public function notas()
    {
      return $this->hasMany(Nota::class, 'id');
    }
}
