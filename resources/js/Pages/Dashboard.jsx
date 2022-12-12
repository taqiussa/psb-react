import React, { useEffect, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout';
import Select from 'react-select'
import { useForm } from '@inertiajs/inertia-react';

const Dashboard = ({ list_siswa }) => {
    const { data, setData } = useForm({
        op: []
    });
    const [cek, setCek] = useState('');

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    }
    const handle = (e) => {
        setCek(e.target.value);
    }
    return (
        <div className="lg:grid lg:grid-cols-4 lg:gap-4">
            <div>
                <Select onChange={handleChange} options={list_siswa} name="op" />
            </div>
            <div>
                <input name='cek' onChange={handle} value={cek} className="border border-1 border-slate-700" />
            </div>
            <div>
                {cek}
            </div>
        </div>
    )
}

Dashboard.layout = page => <AppLayout children={page} />
export default Dashboard