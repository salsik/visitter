<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calls extends Model
{
    protected $table = 'calls';
    protected $fillable = ['rate', 'note', 'name', 'image', 'dep_id'];

    public function withFullUrl()
    {
        $this->image = env('APP_URL') .'/storage/'. $this->image;
        return $this;
    }
}
