<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\Promocode;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PromocodeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Promocode::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => Str::random(10),
            'event_id' => Event::all()->random()->id,
            'percent' => rand(1, 99)
        ];
    }
}
