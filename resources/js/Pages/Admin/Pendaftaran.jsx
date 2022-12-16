import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import Checkbox from '@/Components/Checkbox'
import AppLayout from '@/Layouts/AppLayout'
import SimpanButton from '@/Components/SimpanButton'
import React, { useEffect, useState } from 'react'
import { Head, useForm } from '@inertiajs/inertia-react'
import { isEmpty } from 'lodash'
import axios from 'axios'
import moment from 'moment'
import { toast } from 'react-toastify';

const Pendaftaran = ({ listProvinsi }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kodeDaftar: '',
        tingkat: '',
        nama: '',
        nisn: '',
        jenisKelamin: '',
        tempatLahir: '',
        tanggalLahir: moment(new Date()).format('YYYY-MM-DD'),
        nik: '',
        status: '',
        anakKe: '',
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
        noKps: '',
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
    const [checks, setChecks] = useState({
        kps: '',
        isWali: ''
    });
    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handlePendaftaran = (e) => {
        setKode(e.target.value);
    }

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setChecks({
            ...checks,
            [name]: checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('pendaftaran.store'), {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            onSuccess: () => {
                toast.success('Berhasil Simpan Pendaftaran', {
                    theme: 'colored'
                })
            },
            onError: () => {
                toast.error('Gagal !', {
                    theme: 'colored'
                });
            }
        });
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
                    setData((prevState) => {
                        return {
                            ...prevState,
                            kodeDaftar: response.data.kode,
                            jenisKelamin: jk
                        }
                    }

                    );
                });
        }
    }, [kode]);

    // Alamat Siswa
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

    // Alamat Sekolah Dasar
    useEffect(() => {
        if (!isEmpty(data.provinsiSekolah)) {
            axios.post(route('get-cities', {
                code: data.provinsiSekolah
            }))
                .then(response => {
                    setCities2(response.data.listKota);
                });
        }
        setCities2([]);
        setDistricts2([]);
        setVillages2([]);
    }, [data.provinsiSekolah])

    useEffect(() => {
        if (!isEmpty(data.kabupatenSekolah)) {
            axios.post(route('get-districts', {
                code: data.kabupatenSekolah
            }))
                .then(response => {
                    setDistricts2(response.data.listKecamatan);
                });
        }
        setDistricts2([]);
        setVillages2([]);
    }, [data.kabupatenSekolah])

    useEffect(() => {
        if (!isEmpty(data.kecamatanSekolah)) {
            axios.post(route('get-villages', {
                code: data.kecamatanSekolah
            }))
                .then(response => {
                    setVillages2(response.data.listDesa);
                });
        }
        setVillages2([]);
    }, [data.kecamatanSekolah])

    // Alamat Sekolah Asal Pindahan
    useEffect(() => {
        if (!isEmpty(data.provinsiSekolahAsal)) {
            axios.post(route('get-cities', {
                code: data.provinsiSekolahAsal
            }))
                .then(response => {
                    setCities3(response.data.listKota);
                });
        }
        setCities3([]);
        setDistricts3([]);
        setVillages3([]);
    }, [data.provinsiSekolahAsal])

    useEffect(() => {
        if (!isEmpty(data.kabupatenSekolahAsal)) {
            axios.post(route('get-districts', {
                code: data.kabupatenSekolahAsal
            }))
                .then(response => {
                    setDistricts3(response.data.listKecamatan);
                });
        }
        setDistricts3([]);
        setVillages3([]);
    }, [data.kabupatenSekolahAsal])

    useEffect(() => {
        if (!isEmpty(data.kecamatanSekolahAsal)) {
            axios.post(route('get-villages', {
                code: data.kecamatanSekolahAsal
            }))
                .then(response => {
                    setVillages3(response.data.listDesa);
                });
        }
        setVillages3([]);
    }, [data.kecamatanSekolahAsal])

    return (
        <>
            <Head title='Pendaftaran' />
            <form onSubmit={handleSubmit} >
                <h1 className='text-2xl font-bold text-slate-700'>Identitas Calon Siswa</h1>
                <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className='flex flex-col'>
                            <InputLabel value='Pendaftaran Siswa' />
                            <select className='rounded-md' name='kategoriPendaftar' onChange={handlePendaftaran}>
                                <option value="">Pilih Kategori</option>
                                <option value="A">Baru Putra</option>
                                <option value="B">Baru Putri</option>
                                <option value="C">Pindahan Putra</option>
                                <option value="D">Pindahan Putri</option>
                            </select>
                            {
                                errors &&
                                <InputError message={errors.kodeDaftar} className="mt-2" />
                            }
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel value='Pendaftaran Kelas' />
                            <select className='rounded-md' name='tingkat' value={data.tingkat} onChange={handleChange}>
                                <option value="">Pilih Tingkat</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                            {
                                errors &&
                                <InputError message={errors.tingkat} className="mt-2" />
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
                        <div className='flex flex-col'>
                            <InputLabel value='Kode Pendaftaran' />
                            <TextInput
                                id="kodeDaftar"
                                type="text"
                                name="kodeDaftar"
                                value={data.kodeDaftar}
                                isDisabled={true}
                                className="block w-full disabled:bg-slate-200"
                            />
                            {
                                errors &&
                                <InputError message={errors.kodeDaftar} className="mt-2" />
                            }
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
                            {
                                errors &&
                                <InputError message={errors.nik} className="mt-2" />
                            }
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
                            <select className='rounded-md disabled:bg-slate-200' name='jenisKelamin' value={data.jenisKelamin} disabled>
                                <option value="">Pilih</option>
                                <option value="L">Laki - Laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                            {
                                errors &&
                                <InputError message={errors.jenisKelamin} className="mt-2" />
                            }
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
                            {
                                errors &&
                                <InputError message={errors.provinsi} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Kabupaten" />
                            <select className='rounded-md' name='kabupaten' value={data.kabupaten} onChange={handleChange}>
                                <option value="">Pilih Kabupaten</option>
                                {cities.map((kabupaten) => (
                                    <option value={kabupaten.code} key={kabupaten.code}>{kabupaten.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.kabupaten} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Kecamatan" />
                            <select className='rounded-md' name='kecamatan' value={data.kecamatan} onChange={handleChange}>
                                <option value="">Pilih Kecamatan</option>
                                {districts.map((kecamatan) => (
                                    <option value={kecamatan.code} key={kecamatan.code}>{kecamatan.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.kecamatan} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Desa" />
                            <select className='rounded-md' name='desa' value={data.desa} onChange={handleChange}>
                                <option value="">Pilih Desa</option>
                                {villages.map((desa) => (
                                    <option value={desa.code} key={desa.code}>{desa.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.desa} className="mt-2" />
                            }
                        </div>
                    </div>
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className="flex flex-col">
                            <InputLabel value="RT" />
                            <TextInput
                                id="rt"
                                name="rt"
                                value={data.rt}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                            {
                                errors &&
                                <InputError message={errors.rt} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="RW" />
                            <TextInput
                                id="rw"
                                name="rw"
                                value={data.rw}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                            {
                                errors &&
                                <InputError message={errors.rw} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Telepon" />
                            <TextInput
                                id="telepon"
                                name="telepon"
                                value={data.telepon}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                            {
                                errors &&
                                <InputError message={errors.telepon} className="mt-2" />
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
                            {
                                errors &&
                                <InputError message={errors.nisn} className="mt-2" />
                            }
                        </div>
                    </div>
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className="flex flex-col">
                            <InputLabel value="Status" />
                            <TextInput
                                id="status"
                                name="status"
                                value={data.status}
                                handleChange={handleChange}
                                className="block w-full"
                                placeholder="Anak Kandung / Tiri"
                            />
                            {
                                errors &&
                                <InputError message={errors.status} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Anak Ke - Berapa" />
                            <TextInput
                                id="anakKe"
                                name="anakKe"
                                value={data.anakKe}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                            {
                                errors &&
                                <InputError message={errors.anakKe} className="mt-2" />
                            }
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
                            {
                                errors &&
                                <InputError message={errors.namaSekolah} className="mt-2" />
                            }
                        </div>
                    </div>
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className="flex flex-col">
                            <InputLabel value="Provinsi Sekolah Dasar" />
                            <select className='rounded-md' name='provinsiSekolah' value={data.provinsiSekolah} onChange={handleChange}>
                                <option value="">Pilih Provinsi</option>
                                {listProvinsi.map((provinsi) => (
                                    <option value={provinsi.code} key={provinsi.code}>{provinsi.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.provinsiSekolah} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Kabupaten Sekolah Dasar" />
                            <select className='rounded-md' name='kabupatenSekolah' value={data.kabupatenSekolah} onChange={handleChange}>
                                <option value="">Pilih Kabupaten</option>
                                {cities2.map((kabupaten) => (
                                    <option value={kabupaten.code} key={kabupaten.code}>{kabupaten.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.kabupatenSekolah} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Kecamatan Sekolah Dasar" />
                            <select className='rounded-md' name='kecamatanSekolah' value={data.kecamatanSekolah} onChange={handleChange}>
                                <option value="">Pilih Kecamatan</option>
                                {districts2.map((kecamatan) => (
                                    <option value={kecamatan.code} key={kecamatan.code}>{kecamatan.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.kecamatanSekolah} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col">
                            <InputLabel value="Desa Sekolah Dasar" />
                            <select className='rounded-md' name='desaSekolah' value={data.desaSekolah} onChange={handleChange}>
                                <option value="">Pilih Desa</option>
                                {villages2.map((desa) => (
                                    <option value={desa.code} key={desa.code}>{desa.name}</option>
                                ))}
                            </select>
                            {
                                errors &&
                                <InputError message={errors.desaSekolah} className="mt-2" />
                            }
                        </div>
                    </div>
                </div>
                <div className={kode == 'A' || kode == 'B' || kode == '' ? 'hidden' : 'block'}>
                    <h1 className='text-2xl font-bold text-slate-700'>Data Sekolah Asal Pindahan</h1>
                    <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                        <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                            <div className="flex flex-col col-span-2">
                                <InputLabel value='Nama Sekolah Asal Pindahan' />
                                <TextInput
                                    id="namaSekolahAsal"
                                    type="text"
                                    name="namaSekolahAsal"
                                    className="block w-full"
                                    value={data.namaSekolahAsal}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                            <div className="flex flex-col">
                                <InputLabel value="Provinsi Sekolah Asal" />
                                <select className='rounded-md' name='provinsiSekolahAsal' value={data.provinsiSekolahAsal} onChange={handleChange}>
                                    <option value="">Pilih Provinsi</option>
                                    {listProvinsi.map((provinsi) => (
                                        <option value={provinsi.code} key={provinsi.code}>{provinsi.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <InputLabel value="Kabupaten Sekolah Asal" />
                                <select className='rounded-md' name='kabupatenSekolahAsal' value={data.kabupatenSekolahAsal} onChange={handleChange}>
                                    <option value="">Pilih Kabupaten</option>
                                    {cities3.map((kabupaten) => (
                                        <option value={kabupaten.code} key={kabupaten.code}>{kabupaten.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <InputLabel value="Kecamatan Sekolah Asal" />
                                <select className='rounded-md' name='kecamatanSekolahAsal' value={data.kecamatanSekolahAsal} onChange={handleChange}>
                                    <option value="">Pilih Kecamatan</option>
                                    {districts3.map((kecamatan) => (
                                        <option value={kecamatan.code} key={kecamatan.code}>{kecamatan.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <InputLabel value="Desa Sekolah Asal" />
                                <select className='rounded-md' name='desaSekolahAsal' value={data.desaSekolahAsal} onChange={handleChange}>
                                    <option value="">Pilih Desa</option>
                                    {villages3.map((desa) => (
                                        <option value={desa.code} key={desa.code}>{desa.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-2xl font-bold text-slate-700'>Data Orang Tua</h1>
                <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className='flex flex-col'>
                            <InputLabel value='Nama Ayah' />
                            <TextInput
                                id="namaAyah"
                                type="text"
                                name="namaAyah"
                                value={data.namaAyah}
                                className="block w-full"
                                handleChange={handleChange}
                            />
                            {
                                errors &&
                                <InputError message={errors.namaAyah} className="mt-2" />
                            }
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel value='Pekerjaan Ayah' />
                            <TextInput
                                id="pekerjaanAyah"
                                type="text"
                                name="pekerjaanAyah"
                                className="block w-full"
                                value={data.pekerjaanAyah}
                                handleChange={handleChange}
                            />
                            {
                                errors &&
                                <InputError message={errors.pekerjaanAyah} className="mt-2" />
                            }
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel value='Nama Ibu' />
                            <TextInput
                                id="namaIbu"
                                type="text"
                                name="namaIbu"
                                value={data.namaIbu}
                                className="block w-full"
                                handleChange={handleChange}
                            />
                            {
                                errors &&
                                <InputError message={errors.namaIbu} className="mt-2" />
                            }
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel value='Pekerjaan Ibu' />
                            <TextInput
                                id="pekerjaanIbu"
                                type="text"
                                name="pekerjaanIbu"
                                className="block w-full"
                                value={data.pekerjaanIbu}
                                handleChange={handleChange}
                            />
                            {
                                errors &&
                                <InputError message={errors.pekerjaanIbu} className="mt-2" />
                            }
                        </div>
                    </div>
                    <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                        <div className="flex flex-col">
                            <InputLabel value="Penghasilan Orang Tua" />
                            <TextInput
                                id="penghasilan"
                                name="penghasilan"
                                value={data.penghasilan}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                            {
                                errors &&
                                <InputError message={errors.penghasilan} className="mt-2" />
                            }
                        </div>
                        <div className="flex flex-col justify-end">
                            <label className="flex items-center">
                                <Checkbox name="kps" handleChange={handleCheck} value={checks.kps} />
                                <span className="ml-2 text-sm text-gray-600">Kartu KPS ?</span>
                            </label>
                            <label className="flex items-center">
                                <Checkbox name="isWali" handleChange={handleCheck} value={checks.isWali} />
                                <span className="ml-2 text-sm text-gray-600">Ikut Wali ?</span>
                            </label>
                        </div>
                        <div className={`'flex flex-col' ${checks.kps ? 'block' : 'hidden'}`}>
                            <InputLabel value="No. KPS (jika ada)" />
                            <TextInput
                                id="noKps"
                                name="noKps"
                                value={data.noKps}
                                handleChange={handleChange}
                                className="block w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className={checks.isWali ? 'block' : 'hidden'}>
                    <h1 className='text-2xl font-bold text-slate-700'>Data Wali</h1>
                    <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                        <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                            <div className='flex flex-col'>
                                <InputLabel value='Nama Wali' />
                                <TextInput
                                    id="namaWali"
                                    type="text"
                                    name="namaWali"
                                    value={data.namaWali}
                                    className="block w-full"
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <InputLabel value='Pekerjaan Wali' />
                                <TextInput
                                    id="pekerjaanWali"
                                    type="text"
                                    name="pekerjaanWali"
                                    className="block w-full"
                                    value={data.pekerjaanWali}
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <InputLabel value='Alamat Wali' />
                                <TextInput
                                    id="alamatWali"
                                    type="text"
                                    name="alamatWali"
                                    value={data.alamatWali}
                                    className="block w-full"
                                    handleChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <InputLabel value='Telepon Wali' />
                                <TextInput
                                    id="teleponWali"
                                    type="text"
                                    name="teleponWali"
                                    className="block w-full"
                                    value={data.teleponWali}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2 mb-10 mr-5 flex justify-end">
                    <SimpanButton className="ml-4" processing={processing}>
                        Simpan {processing ? <span className="ml-3 spinner-border animate-spin w-5 h-5 border-2 rounded-full border-r-emerald-600"></span> : null}
                    </SimpanButton>
                </div>
            </form>
        </>
    )
}

Pendaftaran.layout = page => <AppLayout children={page} />
export default Pendaftaran