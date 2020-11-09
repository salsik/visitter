<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);

        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'User']);

        SocialDriver::create(['name' => 'facebook']);
    }
}
