<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EventController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix("/auth")->group(function() {
    Route::post("/register",[AuthController::class, 'register']);
    Route::post("/login",[AuthController::class, 'authenticate']);
    Route::post("/logout",[AuthController::class, 'logout']);
    Route::post("/password_reset",[AuthController::class, 'passReset']);
    Route::post("/password_reset/{confirm_token}",[AuthController::class, 'changePassword']);
});

Route::prefix("/events")->group(function() {
    Route::get("", [EventController::class, 'getEvents']);
    Route::get("/{id}", [EventController::class, 'getEventById']);
});

Route::prefix("/companies")->group(function() {
    Route::get("", [CompanyController::class, 'getCompanies']);
    Route::get("/{id}", [CompanyController::class, 'getCompanyById']);
    Route::post("", [CompanyController::class, 'create']);
    Route::delete("/{id}", [CompanyController::class, 'delete']);
    Route::patch("/{id}",  [CompanyController::class, 'update']);
});

Route::prefix("/categories")->group(function() {
    Route::get("", [CategoryController::class, 'getCategories']);
    Route::get("/{id}", [CategoryController::class, 'getCategoryById']);
});

