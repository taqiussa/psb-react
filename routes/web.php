<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\PendaftaranController;
use App\Http\Controllers\ProfileController;
use App\Models\Siswa;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {

    $data = [
        'list_siswa' => User::get()
            ->map(fn ($user) => [
                'label' => $user->name,
                'value' => $user->username
            ])
    ];
    return inertia('Dashboard', $data);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth', 'verified'])->name('home');



Route::middleware('auth')->group(function () {

    //Route Admin
    Route::middleware(['role:Admin'])->group(function () {

        // Pendaftaran
        Route::resource('pendaftaran', PendaftaranController::class)->names([
            'index' => 'pendaftaran'
        ]);

        // Api Semua Data Request
        Route::post('get-kode-pendaftaran', [ApiController::class, 'getKode'])->name('get-kode-pendaftaran');
        Route::post('get-cities', [ApiController::class, 'getCities'])->name('get-cities');
        Route::post('get-districts', [ApiController::class, 'getDistricts'])->name('get-districts');
        Route::post('get-villages', [ApiController::class, 'getVillages'])->name('get-villages');
    });


    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


// setData(
//     {
//         kodeDaftar: data.kodeDaftar,
//         nama: data.nama,
//         nisn: data.nisn,
//         jenisKelamin: data.jenisKelamin,
//         tempatLahir: data.tempatLahir,
//         tanggalLahir: data.tanggalLahir,
//         nik: data.nik,
//         rt: data.rt,
//         rw: data.rw,
//         desa: data.desa,
//         kecamatan: data.kecamatan,
//         kabupaten: response.data.code,
//         provinsi: data.provinsi,
//         namaSekolah: data.namaSekolah,
//         desaSekolah: data.desaSekolah,
//         kecamatanSekolah: data.kecamatanSekolah,
//         kabupatenSekolah: data.kabupatenSekolah,
//         provinsiSekolah: data.provinsiSekolah,
//         namaAyah: data.namaAyah,
//         pekerjaanAyah: data.pekerjaanAyah,
//         namaIbu: data.namaIbu,
//         pekerjaanIbu: data.pekerjaanIbu,
//         penghasilan: data.penghasilan,
//         telepon: data.telepon,
//         namaWali: data.namaWali,
//         pekerjaanWali: data.pekerjaanWali,
//         alamatWali: data.alamatWali,
//         teleponWali: data.teleponWali
//     }
// );