<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Company;
use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EventFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => Str::random(10),
            'description' => $this->faker->paragraph(2),
            'tickets' => $this->faker->randomDigit(),
            'price' => $this->faker->numerify('###.##'),
            'startTime' => $this->faker->date(),
            'company_id' => Company::all()->random()->id,
            'category_id' => Category::all()->random()->id
        ];
    }
}
