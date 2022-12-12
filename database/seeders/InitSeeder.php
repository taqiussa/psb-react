<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class InitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles =
            [
                'Admin',
                'Pendaftar'
            ];
        foreach ($roles as $role) {
            Role::create([
                'name' => $role
            ]);
        }

        $taqi = User::create([
            'name' => 'taqius shofi albastomi',
            'username' => 'taqi',
            'password' => bcrypt('12345678')
        ]);
        $taqi->assignRole('Admin');
        $fathur = User::create([
            'name' => 'fathurrohman',
            'username' => 'fathur',
            'password' => bcrypt('12345678')
        ]);
        $fathur->assignRole('Admin');

    }
}
