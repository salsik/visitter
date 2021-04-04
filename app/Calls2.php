<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Calls extends Model
{
    protected $table = 'calls';
    protected $fillable = ['note','dep_id','company_id', 'image'];

    public function withFullUrl()
    {
        $this->image = env('APP_URL') .'/storage/app/public/'. $this->image;
        return $this;
    }
}
