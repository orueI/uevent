<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use \Backpack\CRUD\app\Models\Traits\CrudTrait;
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'tickets',
        'price',
        'startTime',
        'company_id',
        'category_id'
    ];

    protected $casts = [
        'startTime' => 'datetime',
        'tickets' => 'int',
        'price' => 'float'
    ];

}
