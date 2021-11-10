<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notas', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->bigInteger('Porcentaje');
            $table->foreignId('id_estudiantes')
            ->nullable()
            ->constrained ('estudiantes')
            ->cascadeOnUpdate()
            ->nullOnDelete();
            $table->foreignId('id_generaciones')
            ->nullable()
            ->constrained ('generaciones')
            ->cascadeOnUpdate()
            ->nullOnDelete();
            
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notas');
    }
}
