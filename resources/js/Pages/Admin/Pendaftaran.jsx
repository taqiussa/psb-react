import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import AppLayout from '@/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import { isEmpty } from 'lodash'
import axios from 'axios'
import moment from 'moment'

const Pendaftaran = () => {
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
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);
    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handlePendaftaran = (e) => {
        setKode(e.target.value);
    }
    useEffect(() => {
        if (!isEmpty(kode))
            axios.post(route('get-kode', {
                kategoriPendaftar: kode
            }))
                .then(response => {
                    var jk = ''
                    if(kode == 'A' || kode == 'C'){
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

    }, [kode]);
    return (
        <>
            <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                <div className='flex flex-col'>
                    <InputLabel value={'Pendaftaran Siswa'} />
                    <select className='rounded-md' name='kategoriPendaftar' onChange={handlePendaftaran}>
                        <option value="">Pilih</option>
                        <option value="A">Baru Putra</option>
                        <option value="B">Baru Putri</option>
                        <option value="C">Pindahan Putra</option>
                        <option value="D">Pindahan Putri</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <InputLabel value={'Kode Pendaftaran'} />
                    <TextInput
                        id="username"
                        type="text"
                        name="username"
                        value={data.kodeDaftar}
                        isDisabled={true}
                        className="disabled:bg-slate-200"
                    />
                    {
                        errors &&
                        <InputError message={errors.username} className="mt-2" />
                    }
                </div>
            </div>
            <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                <div className='flex flex-col'>
                    <InputLabel value={'Nama Lengkap'} />
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
                    <InputLabel value={'Tempat Lahir'} />
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
                    <InputLabel value={'Tanggal Lahir'} />
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
                    <InputLabel value={'Jenis Kelamin'} />
                    <select className='rounded-md disabled:bg-slate-200' name='kategoriPendaftar' value={data.jenisKelamin} disabled>
                        <option value="">Pilih</option>
                        <option value="L">Laki - Laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                </div>
            </div>
            <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div className="flex flex-col">
                        <InputLabel value="NISN" />
                        <TextInput 
                        id="nisn"
                        name="nisn"
                        value={data.nisn}
                        handleChange={handleChange}
                        className="w-full block"
                        />
                    </div>
           </div>  
        </>
    )
}

Pendaftaran.layout = page => <AppLayout children={page} />
export default Pendaftaran