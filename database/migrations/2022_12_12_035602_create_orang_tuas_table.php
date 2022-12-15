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
        Schema::create('orang_tuas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('nama_ayah');
            $table->string('pekerjaan_ayah')->nullable();
            $table->string('nama_ibu');
            $table->string('pekerjaan_ibu')->nullable();
            $table->string('penghasilan')->nullable();
            $table->string('telepon')->nullable();
            $table->string('no_kps')->nullable();
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
        Schema::dropIfExists('orang_tuas');
    }
};
