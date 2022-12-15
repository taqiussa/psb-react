<?php

namespace App\Http\Controllers;

use App\Models\Pendaftar;
use Illuminate\Http\Request;
use Laravolt\Indonesia\Models\City;
use Laravolt\Indonesia\Models\District;
use Laravolt\Indonesia\Models\Village;

class ApiController extends Controller
{
    /**
     * get Kode Pendaftar.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getKode(Request $request)
    {
        $cek_kode_terakhir = Pendaftar::selectRaw('max(kode_daftar) as kode_daftar')
            ->where('kode_daftar', 'like', $request->kategoriPendaftar . '%')
            ->first();
        $kode_selanjutnya = substr($cek_kode_terakhir->kode_daftar, 1, 4);
        $kode_selanjutnya++;

        return response()->json([
            'kode' => $request->kategoriPendaftar . sprintf('%04s', $kode_selanjutnya)
        ]);
    }

    /**
     * get list Kota.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getCities(Request $request)
    {
        return response()->json([
            'listKota' => City::whereProvinceCode($request->code)->orderBy('name')->get()
        ]);
    }

    /**
     * get list Kecamatan.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getDistricts(Request $request)
    {
        return response()->json([
            'listKecamatan' => District::whereCityCode($request->code)->orderBy('name')->get()
        ]);
    }

    /**
     * get list Desa.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getVillages(Request $request)
    {
        return response()->json([
            'listKota' => Village::whereDistrictCode($request->code)->orderBy('name')->get()
        ]);
    }
}
