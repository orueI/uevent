<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories() {
        return Category::all();
    }

    public function getCategoryById($id) {
        if($category = Category::find($id))
            return response(["error" => "Company not found"], 404);
        return $category;
    }
}
