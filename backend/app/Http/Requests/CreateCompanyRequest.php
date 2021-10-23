<?php

namespace App\Http\Requests;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyRequest extends FormRequest
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
            'title' => 'required|unique:companies|max:255',
            'location' => 'required|max:255',
            'description' => 'required|max:255',
            'email' => 'required|max:255|email|unique:companies'
        ];
    }

}
