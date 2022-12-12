<?php

namespace Database\Seeders;

use App\Models\Pendaftar;
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
            'password' => bcrypt('asdfasdf')
        ]);
        $taqi->assignRole('Admin');
        $fathur = User::create([
            'name' => 'fathurrohman',
            'username' => 'fathur',
            'password' => bcrypt('12345678')
        ]);
        $fathur->assignRole('Admin');
        $pendaftaran = [
            [
                'nama' => 'Pendaftar Baru Putra 1',
                'kode_daftar' => 'A0001',
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => '2023 / 2024',
                'tingkat' => '7',
                'user_id' => 1
            ],
            [
                'nama' => 'Pendaftar Baru Putra 2',
                'kode_daftar' => 'A0002',
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => '2023 / 2024',
                'tingkat' => '7',
                'user_id' => 1
            ],
            [
                'nama' => 'Pendaftar Baru Putra 3',
                'kode_daftar' => 'A0003',
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => '2023 / 2024',
                'tingkat' => '7',
                'user_id' => 1
            ],
            [
                'nama' => 'Pendaftar Baru Putri 1',
                'kode_daftar' => 'B0001',
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => '2023 / 2024',
                'tingkat' => '7',
                'user_id' => 1
            ],
            [
                'nama' => 'Pendaftar Baru Putri 2',
                'kode_daftar' => 'B0002',
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => '2023 / 2024',
                'tingkat' => '7',
                'user_id' => 1
            ],
        ];
        foreach ($pendaftaran as $pendaftar) {
            Pendaftar::create([
                'nama' => $pendaftar['nama'],
                'kode_daftar' => $pendaftar['kode_daftar'],
                'tanggal_daftar' => $pendaftar['tanggal_daftar'],
                'tahun' => $pendaftar['tahun'],
                'tingkat' => $pendaftar['tingkat'],
                'user_id' => $pendaftar['user_id']
            ]);
        }
    }
}
