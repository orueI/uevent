<?php
namespace App\Http\Controllers;
use App\Models\Event;
use App\Models\Promocode;
use Illuminate\Http\Request;
class PromocodeController extends Controller
{

    public function getPromocodes($eventId) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $event = Event::find($eventId);
            if ($event['user_id'] != $userId) {
                response()->json(["error" => "Access forbidden!"], 403);
            }
            return Promocode::all()->where('event_id', $eventId);
        }
        response()->json(["error" => "Not authorized"], 401);
    }
    public function getPromocodeById($id) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $promocode = Promocode::find($id);
            $eventId = $promocode['event_id'];
            $event = Event::find($eventId);

            if($event['user_id'] != $userId) {
                return response(["error" => "Access forbidden!"], 403);
            }
            return $promocode;
        }
        response()->json(["error" => "Not authorized"], 401);
    }
    public function create(Request $request) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $event = Event::find($request['event_id']);
            if ($event['id'] != $userId) {
                return response(["error" => "Access forbidden!"], 403);
            }
            $promocode = Promocode::create([
                'code' => $request['code'],
                'percent' => $request['percent'],
                'event_id' => $request['event_id'],
            ]);
            return response()->json($promocode, 201);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }
    public function delete($id) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $promocode = Promocode::find($id);
            $event = $promocode['event_id'];
            if ($event['user_id'] != $userId) {
                return response(["error" => "Access forbidden!"], 403);
            }
            return Promocode::destroy($id);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }
    public function update($id, Request $request) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $event = Event::find($request['event_id']);
            if ($event['id'] != $userId) {
                return response(["error" => "Access forbidden!"], 403);
            }
            $promocode = Promocode::find($id);
            $promocode->update([
                'code' => $request['code'],
                'percent' => $request['percent'],
            ]);
            return response()->json($promocode, 201);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }
}
