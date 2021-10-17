<?php

namespace App\Http\Controllers;

use App\Mail\ResetPassEmail;
use App\Models\PasswordResets;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Tymon\JWTAuth\Validators\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;
use \Tymon\JWTAuth\Exceptions\TokenInvalidException;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('login', 'password');

        try {
            if (!$token = JWTAuth::attempt($credentials, ['exp' => \Carbon\Carbon::now()->addDays(7)->timestamp])) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }

    public function register(Request $request)
    {
        $user = User::create([
            'login' => $request->get('login'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
        return response()->json(compact('user'),201);
    }

    public static function getAuthenticatedUser()
    {
        try {

            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return false;
            }
        }

        catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], 403);
        }

        catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], 401);
        }

        catch (JWTException $e) {
            return response()->json(['token_absent'], 404);
        }

        return response()->json($user);
    }

    public static function isLogged(): bool
    {
        if(self::getAuthenticatedUser() == null)
            return false;

        return true;
    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response(['message' => 'Successfully logged out']);
        } catch (TokenInvalidException $e) {
            return response(['error' => $e->getMessage()], 401);
        }
    }

    public function passReset(Request $request) {
        $token = bin2hex(random_bytes(22));
        $email = $request->get("email");
        $user = User::where(['email' => $email])->get()->all();
        if(!$user)
            return response(['error' => "user not found"], 404);
        $message = new \stdClass();
        $message->path = "http://127.0.0.1:8000/api/auth/password_reset/$token";
        DB::insert('insert into password_resets (email, token) values (?, ?)', [$email, $token]);
        Mail::to($email)->send(new ResetPassEmail($message));
        return response(['message' => 'Password reset message sent'], 200);
    }
    public function changePassword($token, Request $request) {
        $record = PasswordResets::where(["token" => $token]);
        $user = $record->get()->all();
        if(!$user) {
            return response(['error' => "password reset token not found"], 404);
        }
        $email = $user[0]->get("email");
        $password = Hash::make($request->get("password"));
        DB::update('update users set password = ? where email = ?', [$password,$email]);
        $record->delete();
        return response(['message' => 'Password successfully reset'], 200);
    }
}
