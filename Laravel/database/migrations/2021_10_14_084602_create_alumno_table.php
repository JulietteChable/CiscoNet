<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAlumnoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('alumno', function (Blueprint $table) {

            $table->id();
            $table->string('Generacion')->nullable();
            $table->bigInteger('Matricula')->nullable();
            $table->string('Nombre')->nullable();
            $table->string('Apellido')->nullable();
            $table->string('Status')->nullable();
            $table->string('Curso')->nullable();
            $table->string('Ccna1')->nullable();
            $table->string('Ccna2')->nullable();
            $table->string('Final')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('alumno');
    }
}
