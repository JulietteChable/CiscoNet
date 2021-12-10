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
            $table->foreignId('id_alumno')
            ->nullable()
            ->constrained('alumno')
            ->cascadeOnUpdate()
            ->nullOnDelete();


            $table->string('Nombre')->nullable();
            $table->string('Curso1')->nullable();
            $table->string('Curso2')->nullable();
            $table->string('Promedio')->nullable();
            $table->timestamps();

            $table->foreignId('id_curso')
            ->nullable()
            ->constrained('curso')
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
