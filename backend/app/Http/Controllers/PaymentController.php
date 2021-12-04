<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use App\Models\SubscribedUsers;
use App\Http\Requests\CreateSubscriptionRequest;
use App\Mail\ResetPassEmail;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Facade\FlareClient\Http\Exceptions\BadResponse;

class PaymentController extends Controller
{
    public function buyTicket(PaymentRequest $request, $eventId) {
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
            $validated = $request->validated();
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
        }

        return response()->json("Forbidden", 403);

    }
}
