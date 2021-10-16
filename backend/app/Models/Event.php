<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'tickets',
        'price',
        'startTime'
    ];

    protected $casts = [
        'startTime' => 'datetime',
        'tickets' => 'int',
        'price' => 'float'
    ];

}
