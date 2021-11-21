<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSubscriptionRequest;
use App\Mail\ResetPassEmail;
use App\Models\Event;
use App\Models\SubscribedUsers;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use phpDocumentor\Reflection\Types\Object_;

class SubscribedUsersController extends Controller
{
    public function getSubscribedOnEventUsers($eventId) {
        if(Event::find($eventId)['showEventVisitors'] == 1) {
            return SubscribedUsers::all()->where('event_id', $eventId)->where('showUser',1);
        }
        return response()->json("Bad request", 400);
    }

    public function getSubscribedUser($eventId) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $subscription = SubscribedUsers::where('event_id', $eventId)->where('user_id', $userId);
            if($subscription) {
                return true;
            }
            return false;
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function subscribeToEvent(CreateSubscriptionRequest $request, $eventId) {
        $validated = $request->validated();
        $userId = AuthController::getAuthenticatedUser()->getData()->id;
        if($event = Event::find($eventId)) {
            if($event->tickets > 0) {
                $subscription = SubscribedUsers::create([
                    'event_id' => $eventId,
                    'user_id' => $userId,
                    'notify' => $validated['notify'],
                    'showUser' => $validated['showUser']
                ]);

                if ($validated['notify'] == 1) {
                    $user = User::find($userId);
                    $message = new \stdClass();
                    $message->path = "event is coming";
                    Mail::to($user["email"])->send(new ResetPassEmail($message));
                }

                $event->tickets -= 1;
                $event->update(["tickets" => $event->tickets]);
                return response()->json($subscription, 201);
            }
        }
        return response()->json("Forbidden", 403);
    }

    /*public function delete($userId) {

    }*/
}
