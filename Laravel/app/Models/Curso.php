<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    use HasFactory;

    protected $table = "curso";

    protected $fillable = [

      'Curso'

    ];

    public function cursos()
    {
      return $this->hasMany(Curso::class, 'id');
    }
}
