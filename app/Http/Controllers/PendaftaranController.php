<?php

namespace App\Http\Controllers;

use App\Models\Biodata;
use App\Models\Pendaftar;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravolt\Indonesia\Models\Province;

class PendaftaranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = [
            'listProvinsi' => Province::orderBy('name')->get()
                ->map(fn ($province) => [
                    'name' => $province->name,
                    'code' => $province->code
                ]),
        ];
        return inertia('Admin/Pendaftaran', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // 
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'kodeDaftar' => 'required|unique:users,kode_daftar',
            'tingkat' => 'required',
            'nama' => 'required',
            'nisn' => 'required',
            'jenisKelamin' => 'required',
            'tempatLahir' => 'required',
            'tanggalLahir' => 'required',
            'status' => 'required',
            'anakKe' => 'required',
            'nik' => 'required',
            'rt' => 'required',
            'rw' => 'required',
            'desa' => 'required',
            'kecamatan' => 'required',
            'kabupaten' => 'required',
            'provinsi' => 'required',
            'namaSekolah' => 'required',
            'desaSekolah' => 'required',
            'kecamatanSekolah' => 'required',
            'kabupatenSekolah' => 'required',
            'provinsiSekolah' => 'required',
            'namaAyah' => 'required',
            'namaIbu' => 'required',
            'pekerjaanAyah' => 'required',
            'pekerjaanIbu' => 'required',
            'penghasilan' => 'required',
            'telepon' => 'required',
        ]);

        try {
            DB::beginTransaction();

            $user = User::create([
                'name' => $request->nama,
                'kode_daftar' => $request->kodeDaftar,
                'password' => bcrypt('123456789'),
                'user_id' => auth()->user()->id
            ]);

            
            // $user->alamat()->create([
            //     '' 
            // ]);
            
            $user->biodata()->create([
                'tanggal_daftar' => date('Y-m-d'),
                'tahun' => $this->data_tahun(),
                'tingkat' => $request->tingkat,
                'nik' => $request->nik,
                'nisn' => $request->nisn,
                'tempat_lahir' => $request->tempatLahir,
                'tanggal_lahir' => $request->tanggalLahir,
                'status' => $request->status,
                'anak_ke' => $request->anakKe,
                'no_kps' => $request->noKps,
            ]);
            DB::commit();
            dd('Berhasil');
        } catch (\Throwable $th) {
            DB::rollBack();
            dd($th);
        }

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function data_tahun()
    {
        $tahunIni = gmdate('Y');
        // $bulanIni = gmdate('m');
        // if ($bulanIni <= 6) {
        //     $tahunAjaran = (intval($tahunIni) - 1) . ' / ' . intval($tahunIni);
        // } else {
        //     $tahunAjaran = intval($tahunIni) . ' / ' . (intval($tahunIni) + 1);
        // }
        $tahunAjaran = intval($tahunIni) . ' / ' . intval($tahunIni + 1);
        return $tahunAjaran;
    }
}
