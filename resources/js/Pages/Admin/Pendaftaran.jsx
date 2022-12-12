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
        username: '',
        password: '',
        remember: '',
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
        if(!isEmpty(kode))
        axios.post(route('get-kode', {
            kategoriPendaftar: kode
        }))
            .then(response => {
                setKodePendaftaran(response.data.kode);
            });
        
    }, [kode]);
    return (
        <>
            <div className="pt-3 lg:grid lg:grid-cols-4 lg:gap-4">
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
                        value={kodePendaftaran}
                        isDisabled={true}
                    />

                    {
                        errors &&
                        <InputError message={errors.username} className="mt-2" />
                    }
                </div>
            </div>
        </>
    )
}

Pendaftaran.layout = page => <AppLayout children={page} />
export default Pendaftaran