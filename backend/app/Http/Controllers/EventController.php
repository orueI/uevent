<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateEventRequest;
use App\Http\Requests\UpdateEventRequest;
use App\Models\Company;
use App\Models\Event;

class EventController extends Controller
{
    public function getEvents() {
        return Event::all();
    }

    public function getEventById($id) {
        if(!Event::find($id))
            return response(["error" => "Event not found"], 404);
        return Event::find($id);
    }

    public function create(CreateEventRequest $request) {
        $validated = $request->validated();
        $userId = AuthController::getAuthenticatedUser()->getData()->id;
        $company = Company::where('user_id', $userId)->get()[0];
        if(!$company) {
            $event = Event::create([
                'title' => $validated['title'],
                'description' => $validated['description'],
                'tickets' => $validated['tickets'],
                'price' => $validated['price'],
                'category_id' => $validated['category_id'],
                'startTime' => $validated['startTime'],
                'showEventVisitors' => $validated['showEventVisitors'],
                'company_id' => $company->id
            ]);

            return response()->json($event, 201);
        }
        return response()->json(["error" => "Bad Request"], 400);
    }

    public function delete($eventId) {
        if(AuthController::isLogged()) {
            $companyId = Company::where('user_id', AuthController::getAuthenticatedUser()->getData()->id)->get()[0]->id;
            try {
                if (Event::where("company_id", $companyId)->where("id", $eventId)->get()[0])
                    return Event::destroy($eventId);
            }
            catch(\Exception $e) {
                return response()->json(["error" => "Bad request"], 400);
            }
        }

        return response()->json(["error" => "Not authorized"], 401);
    }

    public function update($id, UpdateEventRequest $request) {
        $validated = $request->validated();
        try {
            $companyId = Company::where('user_id', AuthController::getAuthenticatedUser()->getData()->id)->get()[0]->id;
            if ($event = Event::where("company_id", $companyId)->where("id", $id)->get()[0]) {
                $event->update($validated);
                return response()->json(["message" => "Success"], 200);
            }
            return response()->json(["error" => "Forbidden"], 403);
        }
        catch(\Exception $e) {
            return response()->json(["error" => "Not authorized"], 401);
        }
    }
}
