<?php

namespace App\Http\Requests;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePromocodeRequest extends FormRequest
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
            "code" => "min:1",
            "percent" => "numeric|min:1|max:100"
        ];
    }
}
