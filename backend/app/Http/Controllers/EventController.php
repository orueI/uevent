<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    public function getEvents() {
        return Event::all();
    }

    public function getEventById($id) {
        if(!Event::find($id))
            return response(["error" => "User not found"], 404);
        return Event::find($id);
    }
}
