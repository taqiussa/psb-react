<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calon_siswas', function (Blueprint $table) {
            $table->id();
            $table->string('kode_daftar');
            $table->string('nama');
            $table->date('tanggal_daftar');
            $table->foreignId('user_id');
            $table->string('tingkat');
            $table->string('pindahan')->default(0);
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
        Schema::dropIfExists('calon_siswas');
    }
};
