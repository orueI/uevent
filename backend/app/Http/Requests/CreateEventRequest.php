<?php

namespace App\Http\Requests;

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Http\FormRequest;

class CreateEventRequest extends FormRequest
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
            'title' => "required|min:3",
            'description' => 'required',
            'tickets' => 'required|min:1',
            'price' => 'required',
            'category_id' => 'required',
            'startTime' => 'required',
            'showEventVisitors' => 'required|min:0|max:1'
        ];
    }
}
