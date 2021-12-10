<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notas extends Model
{
    use HasFactory;

    protected $table = "notas";
    protected $fillable = [

        'Nombre',
        'Curso1',
        'Curso2',
        'Promedio'
  
      ];

    public function alumnos()
    {
      return $this->belongsTo(Alumno::class, 'id_alumno');
    }

    public function cursos()
    {
      return $this->belongsTo(Curso::class, 'id_curso');
    }
}
  

