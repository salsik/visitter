<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Receptions extends Model
{
    protected $table = 'receptions';
    protected $fillable = ['company_id', 'dep_id', 'user_id'];
}