<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategories() {
        return Category::all();
    }

    public function getCategoryById($id) {
        if(!$category = Category::find($id))
            return response(["error" => "Category not found"], 404);
        return $category;
    }
}
