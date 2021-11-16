<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCertificadoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('certificado', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->string('estudiante')->nullable();
            $table->string('escuela')->nullable();
            $table->string('ubicacion')->nullable();
            $table->string('fecha')->nullable();
            $table->string('instructor')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('certificado');
    }
}
