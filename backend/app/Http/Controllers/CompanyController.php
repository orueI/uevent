<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyRequest;
use App\Models\Company;

class CompanyController extends Controller
{
    public function getCompanies() {
        return Company::all();
    }

    public function getCompanyById($id) {
        if(!Company::find($id))
            return response(["error" => "Company not found"], 404);
        return Company::find($id);
    }

    public function create(CompanyRequest $request) {
        $validated = $request->validated();
        if($userId = auth()->id()) {
            $company = Company::create([
                'title' => $validated['title'],
                'location' => $validated['location'],
                'description' => $validated['description'],
                'email' => $validated['email'],
                'user_id' => $userId
            ]);
            return response()->json($company, 201);
        }
    }

}
