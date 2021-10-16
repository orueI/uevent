<?php

namespace Database\Seeders;

use App\Models\Promocode;
use Illuminate\Database\Seeder;

class PromocodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Promocode::factory(10)->create();
    }
}
