import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import InputError from '@/Components/InputError'
import AppLayout from '@/Layouts/AppLayout'
import React, { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react'
import { isEmpty, set } from 'lodash'
import axios from 'axios'

const Pendaftaran = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        kodeDaftar: '',
        nisn: '',
        tempatLahir: '',
        tanggalLahir: '',
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
    const [kodePendaftaran, setKodePendaftaran] = useState('');
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
                    setData(
                        {
                            kodeDaftar: response.data.kode,
                            nisn: '',
                            tempatLahir: '',
                            tanggalLahir: '',
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
                    />
                    {
                        errors &&
                        <InputError message={errors.username} className="mt-2" />
                    }
                </div>
            </div>
            <div className="py-3 lg:grid lg:grid-cols-4 lg:gap-4">
                <div className='flex flex-col'>
                    <InputLabel value={'NISN'} />
                    <select className='rounded-md' name='nisn' onChange={handleChange}>
                        <option value="">Pilih</option>
                        <option value="A">Baru Putra</option>
                        <option value="B">Baru Putri</option>
                        <option value="C">Pindahan Putra</option>
                        <option value="D">Pindahan Putri</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <InputLabel value={'Tempat Lahir'} />
                    <TextInput
                        id="tempatLahir"
                        type="text"
                        name="tempatLahir"
                        value={data.tempatLahir}
                    />
                    {
                        errors &&
                        <InputError message={errors.tempatLahir} className="mt-2" />
                    }
                </div>
            </div>
        </>
    )
}

Pendaftaran.layout = page => <AppLayout children={page} />
export default Pendaftaran