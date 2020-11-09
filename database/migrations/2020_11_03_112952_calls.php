<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Calls extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('calls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('rate');
            $table->string('note');
            $table->string('name');
            $table->string('image');
            $table->integer('dep_id')->unsigned();
            $table->foreign('dep_id')->references('id')->on('departments');
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
        Schema::dropIfExists('calls');
    }
}
