import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import AppLayout from '@/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import { isEmpty } from 'lodash'
import axios from 'axios'
import moment from 'moment'

const Pendaftaran = ({ listProvinsi }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kodeDaftar: '',
        nama: '',
        nisn: '',
        jenisKelamin: '',
        tempatLahir: '',
        tanggalLahir: moment(new Date()).format('YYYY-MM-DD'),
        nik: '',
        rt: '',
        rw: '',
        desa: '',
        kecamatan: '',
        kabupaten: '',
        provinsi: '',
        namaSekolah: '',
        desaSekolah: '',
        kecamatanSekolah: '',
        kabupatenSekolah: '',
        provinsiSekolah: '',
        namaSekolahAsal: '',
        desaSekolahAsal: '',
        kecamatanSekolahAsal: '',
        kabupatenSekolahAsal: '',
        provinsiSekolahAsal: '',
        namaAyah: '',
        pekerjaanAyah: '',
        namaIbu: '',
        pekerjaanIbu: '',
        penghasilan: '',
        telepon: '',
        namaWali: '',
        pekerjaanWali: '',
        alamatWali: '',
        teleponWali: ''
    });
    const [kode, setKode] = useState('');
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState([]);
    const [cities2, setCities2] = useState([]);
    const [districts2, setDistricts2] = useState([]);
    const [villages2, setVillages2] = useState([]);
    const [cities3, setCities3] = useState([]);
    const [districts3, setDistricts3] = useState([]);
    const [villages3, setVillages3] = useState([]);
    const [cities4, setCities4] = useState([]);
    const [districts4, setDistricts4] = useState([]);
    const [villages4, setVillages4] = useState([]);

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handlePendaftaran = (e) => {
        setKode(e.target.value);
    }
    useEffect(() => {
        if (!isEmpty(kode)) {
            axios.post(route('get-kode-pendaftaran', {
                kategoriPendaftar: kode
            }))
                .then(response => {
                    var jk = ''
                    if (kode == 'A' || kode == 'C') {
                        jk = 'L'
                    } else {
                        jk = 'P'
                    }
                    setData(
                        {
                            kodeDaftar: response.data.kode,
                            nama: '',
                            nisn: '',
                            jenisKelamin: jk,
                            tempatLahir: '',
                            tanggalLahir: moment(new Date()).format('YYYY-MM-DD'),
                            nik: '',
                            rt: '',
                            rw: '',
                            desa: '',
                            kecamatan: '',
                            kabupaten: '',
                            provinsi: '',
                            namaSekolah: '',
                            desaSekolah: '',
                            kecamatanSekolah: '',
                            kabupatenSekolah: '',
                            provinsiSekolah: '',
                            namaSekolahAsal: '',
                            desaSekolahAsal: '',
                            kecamatanSekolahAsal: '',
                            kabupatenSekolahAsal: '',
                            provinsiSekolahAsal: '',
                            namaAyah: '',
                            pekerjaanAyah: '',
                            namaIbu: '',
                            pekerjaanIbu: '',
                            penghasilan: '',
                            telepon: '',
                            namaWali: '',
                            pekerjaanWali: '',
                            alamatWali: '',
                            teleponWali: ''
                        }
                    );
                });
        }
    }, [kode]);

    useEffect(() => {
        if (!isEmpty(data.provinsi)) {
            axios.post(route('get-cities', {
                code: data.provinsi
            }))
                .then(response => {
                    setCities(response.data.listKota);
                });
        }
        setCities([]);
        setDistricts([]);
        setVillages([]);
    }, [data.provinsi])

    useEffect(() => {
        if (!isEmpty(data.kabupaten)) {
            axios.post(route('get-districts', {
                code: data.kabupaten
            }))
                .then(response => {
                    setDistricts(response.data.listKecamatan);
                    console.log(response.data);
                });
        }
        setDistricts([]);
        setVillages([]);
    }, [data.kabupaten])

    useEffect(() => {
        if (!isEmpty(data.kecamatan)) {
            axios.post(route('get-villages', {
                code: data.kecamatan
            }))
                .then(response => {
                    setVillages(response.data.listDesa);
                });
        }
        setVillages([]);
    }, [data.kecamatan])

    return (
        <>
            <h1 className='text-2xl font-bold text-slate-700'>Identitas Calon Siswa</h1>
            <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className='flex flex-col'>
                        <InputLabel value='Pendaftaran Siswa' />
                        <select className='rounded-md' name='kategoriPendaftar' onChange={handlePendaftaran}>
                            <option value="">Pilih</option>
                            <option value="A">Baru Putra</option>
                            <option value="B">Baru Putri</option>
                            <option value="C">Pindahan Putra</option>
                            <option value="D">Pindahan Putri</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel value='Kode Pendaftaran' />
                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            value={data.kodeDaftar}
                            isDisabled={true}
                            className="block w-full disabled:bg-slate-200"
                        />
                        {
                            errors &&
                            <InputError message={errors.username} className="mt-2" />
                        }
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel value='Nama Lengkap' />
                        <TextInput
                            id="nama"
                            type="text"
                            name="nama"
                            className="block w-full"
                            value={data.nama}
                            handleChange={handleChange}
                        />
                        {
                            errors &&
                            <InputError message={errors.nama} className="mt-2" />
                        }
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="NISN" />
                        <TextInput
                            id="nisn"
                            name="nisn"
                            value={data.nisn}
                            handleChange={handleChange}
                            className="block w-full"
                        />
                    </div>
                </div>
                <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col">
                        <InputLabel value="NIK" />
                        <TextInput
                            id="nik"
                            name="nik"
                            value={data.nik}
                            handleChange={handleChange}
                            className="block w-full"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel value='Tempat Lahir' />
                        <TextInput
                            id="tempatLahir"
                            type="text"
                            name="tempatLahir"
                            className="block w-full"
                            value={data.tempatLahir}
                            handleChange={handleChange}
                        />
                        {
                            errors &&
                            <InputError message={errors.tempatLahir} className="mt-2" />
                        }
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel value='Tanggal Lahir' />
                        <TextInput
                            id="tanggalLahir"
                            type="date"
                            name="tanggalLahir"
                            className="block w-full"
                            value={data.tanggalLahir}
                            handleChange={handleChange}
                        />
                        {
                            errors &&
                            <InputError message={errors.tanggalLahir} className="mt-2" />
                        }
                    </div>
                    <div className='flex flex-col'>
                        <InputLabel value='Jenis Kelamin' />
                        <select className='rounded-md disabled:bg-slate-200' name='kategoriPendaftar' value={data.jenisKelamin} disabled>
                            <option value="">Pilih</option>
                            <option value="L">Laki - Laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                    </div>
                </div>
                <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col">
                        <InputLabel value="Provinsi" />
                        <select className='rounded-md' name='provinsi' value={data.provinsi} onChange={handleChange}>
                            <option value="">Pilih Provinsi</option>
                            {listProvinsi.map((provinsi) => (
                                <option value={provinsi.code} key={provinsi.code}>{provinsi.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Kabupaten" />
                        <select className='rounded-md' name='kabupaten' value={data.kabupaten} onChange={handleChange}>
                            <option value="">Pilih Kabupaten</option>
                            {cities.map((kabupaten) => (
                                <option value={kabupaten.code} key={kabupaten.code}>{kabupaten.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Kecamatan" />
                        <select className='rounded-md' name='kecamatan' value={data.kecamatan} onChange={handleChange}>
                            <option value="">Pilih Kecamatan</option>
                            {districts.map((kecamatan) => (
                                <option value={kecamatan.code} key={kecamatan.code}>{kecamatan.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Desa" />
                        <select className='rounded-md' name='desa' value={data.desa} onChange={handleChange}>
                            <option value="">Pilih Desa</option>
                            {villages.map((desa) => (
                                <option value={desa.code} key={desa.code}>{desa.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl font-bold text-slate-700'>Data Sekolah Dasar</h1>
            <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col col-span-2">
                            <InputLabel value='Nama Sekolah Dasar' />
                            <TextInput
                            id="namaSekolah"
                            type="text"
                            name="namaSekolah"
                            className="block w-full"
                            value={data.namaSekolah}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col">
                        <InputLabel value="Provinsi Sekolah Dasar" />
                        <select className='rounded-md' name='provinsi' value={data.provinsi} onChange={handleChange}>
                            <option value="">Pilih Provinsi</option>
                            {listProvinsi.map((provinsi) => (
                                <option value={provinsi.code} key={provinsi.code}>{provinsi.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Kabupaten Sekolah Dasar" />
                        <select className='rounded-md' name='kabupaten' value={data.kabupaten} onChange={handleChange}>
                            <option value="">Pilih Kabupaten</option>
                            {cities.map((kabupaten) => (
                                <option value={kabupaten.code} key={kabupaten.code}>{kabupaten.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Kecamatan Sekolah Dasar" />
                        <select className='rounded-md' name='kecamatan' value={data.kecamatan} onChange={handleChange}>
                            <option value="">Pilih Kecamatan</option>
                            {districts.map((kecamatan) => (
                                <option value={kecamatan.code} key={kecamatan.code}>{kecamatan.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <InputLabel value="Desa Sekolah Dasar" />
                        <select className='rounded-md' name='desa' value={data.desa} onChange={handleChange}>
                            <option value="">Pilih Desa</option>
                            {villages.map((desa) => (
                                <option value={desa.code} key={desa.code}>{desa.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

Pendaftaran.layout = page => <AppLayout children={page} />
export default Pendaftaran