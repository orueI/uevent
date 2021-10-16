<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Company::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->company(),
            'location' => $this->faker->address(),
            'description' => $this->faker->paragraph(2, 5),
            'email' => $this->faker->companyEmail(),
            'user_id' => User::all()->random()->id
        ];
    }
}
