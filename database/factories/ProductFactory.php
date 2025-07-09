<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => ucwords(fake()->word() . ' ' . fake()->word()),  // Nama product
            'barcode' => fake()->unique()->numerify('############'),  // Barcode product
            'harga' => fake()->numberBetween(10000, 1000000),  // Harga product
            'foto' => fake()->imageUrl(640, 480, 'products', true, 'product'),  // Foto product
        ];
    }
}
