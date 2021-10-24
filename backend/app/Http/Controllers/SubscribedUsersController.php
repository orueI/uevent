<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateSubscriptionRequest;
use App\Models\Event;
use App\Models\SubscribedUsers;
use Illuminate\Http\Request;

class SubscribedUsersController extends Controller
{
    public function getSubscribedOnEventUsers($eventId) {
        if(Event::find($eventId)['showEventVisitors'] == 1) {
            return SubscribedUsers::all()->where('event_id', $eventId)->where('showUser',1);
        }
        return response()->json("Bad request", 400);
    }

    public function subscribeToEvent(CreateSubscriptionRequest $request, $eventId) {
        $validated = $request->validated();
        $userId = AuthController::getAuthenticatedUser()->getData()->id;
        if(Event::find($eventId)) {
            $subscription = SubscribedUsers::create([
                'event_id' => $eventId,
                'user_id' => $userId,
                'notify' => $validated['notify'],
                'showUser' => $validated['showUser']
            ]);
            return response()->json($subscription, 201);
        }
        return response()->json("Forbidden", 403);
    }
}
