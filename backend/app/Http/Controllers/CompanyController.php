<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCompanyRequest;
use App\Http\Requests\UpdateCompanyRequest;
use App\Models\Company;

class CompanyController extends Controller
{

    public function getCompanies() {
        return Company::all();
    }

    public function getCompanyById($id) {
        if(!$company = Company::find($id))
            return response(["error" => "Company not found"], 404);
        return $company;
    }

    public function create(CreateCompanyRequest $request) {
        $validated = $request->validated();
        if($userId = AuthController::getAuthenticatedUser()->getData()->id) {
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

    public function delete($id) {
        if(AuthController::isLogged()) {
            if (AuthController::getAuthenticatedUser()->getData()->id == Company::find($id))
                return Company::destroy($id);
            else
                return response()->json(["error" => "Forbidden"], 403);
        }
        return response()->json(["error" => "Not authorized"], 401);
    }

    public function update($id, UpdateCompanyRequest $request) {
        $validated = $request->validated();
        $company = Company::find($id);
        try {
            if (AuthController::getAuthenticatedUser()->getData()->id == $company->user_id) {
                $company->update($validated);
                return response()->json(["message" => "Success"], 200);
            }
            return response()->json(["error" => "Forbidden"], 403);
        }
        catch(\Exception $e) {
            return response()->json(["error" => "Not authorized"], 401);
        }
    }

}
