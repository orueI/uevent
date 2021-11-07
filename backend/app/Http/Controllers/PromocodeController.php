<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePromocodeRequest;
use App\Http\Requests\UpdatePromocodeRequest;
use App\Models\Company;
use App\Models\Event;
use App\Models\Promocode;

class PromocodeController extends Controller
{

    public function getPromocodes($eventId)
    {
        if ($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $company = Company::where("user_id", $userId)->get()[0];
            $event  = Event::find($eventId);

            if ($company["user_id"] != $userId && $event["company_id"] != $company["id"]) {
                return response()->json(["error" => "Access forbidden!"], 403);
            }

            return Promocode::where('event_id', $eventId)->get();
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function getPromocodeById($id)
    {
        if ($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $promocode = Promocode::find($id);
            $eventId = $promocode['event_id'];
            $company = Company::where("user_id", $userId)->get()[0];
            $event  = Event::find($eventId);

            if ($company["user_id"] != $userId && $event["company_id"] != $company["id"]) {
                return response()->json(["error" => "Access forbidden!"], 403);
            }
            return $promocode;
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function create(CreatePromocodeRequest $request)
    {
        $validated = $request->validated();

        if ($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $company = Company::where("user_id", $userId)->get()[0];
            $event  = Event::find($validated["event_id"]);

            if ($company["user_id"] != $userId && $event["company_id"] != $company["id"]) {
                return response()->json(["error" => "Access forbidden!"], 403);
            }
            $promocode = Promocode::create([
                'code' => $validated['code'],
                'percent' => $validated['percent'],
                'event_id' => $validated['event_id'],
            ]);
            return response()->json($promocode, 201);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function delete($id)
    {
        if ($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $promocode = Promocode::find($id);
            if(!$promocode) {
                return response()->json(["error" => "Not found!"], 404);
            }
            $company = Company::where("user_id", $userId)->get()[0];
            $event  = Event::find($promocode["event_id"]);

            if ($company["user_id"] != $userId && $event["company_id"] != $company["id"]) {
                return response()->json(["error" => "Access forbidden!"], 403);
            }
            return Promocode::destroy($id);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function update($id, UpdatePromocodeRequest $request)
    {
        $validated = $request->validated();

        if ($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $promocode = Promocode::find($id);
            $company = Company::where("user_id", $userId)->get()[0];
            $event  = Event::find($promocode["event_id"]);

            if ($company["user_id"] != $userId && $event["company_id"] != $company["id"]) {
                return response()->json(["error" => "Access forbidden!"], 403);
            }

            $promocode->update($validated);
            return response()->json($promocode, 201);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }
}
