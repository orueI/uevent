<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use App\Models\SubscribedUsers;

class PaymentController extends Controller
{
    public function buyTicket(PaymentRequest $request) {
        $validated = $request->validated();
        $cardCorrect = $validated['number'] == '6666666666666666' && $validated['expiration_date'] == '06/06/6666' && $validated['cvv'] == '666';
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {

            if ($cardCorrect) {
                sleep(10);
                return response()->json(SubscribedUsers::create([
                    'event_id' => $validated['event_id'],
                    'user_id' => $userId,
                    'notify' => $validated['notify'],
                    'showUser' => $validated['showUser'],
                ]), 200);
            } else {
                return response()->json(["error" => "You're fucking slave! Incorrect card"], 401);
            }
        }
        return response()->json(["error" => "You're fucking slave!"], 401);
    }
}
