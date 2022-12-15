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
        Schema::create('sekolah_asals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pendaftar_id');
            $table->foreignId('desa')->nullable();
            $table->foreignId('kecamatan')->nullable();
            $table->foreignId('kabupaten')->nullable();
            $table->foreignId('provinsi')->nullable();
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
        Schema::dropIfExists('sekolah_asals');
    }
};
