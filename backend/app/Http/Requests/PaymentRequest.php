<?php

namespace App\Http\Requests;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\FormRequest;

class PaymentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return AuthController::isLogged();
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'number' => 'required|min:6666666666666666|max:6666666666666666|numeric',
            'expiration_date' => 'required|max:10',
            'cvv' => 'required|min:666|max:666|numeric',
            'notify' => 'required',
            'showUser' => 'required'
        ];
    }
}
