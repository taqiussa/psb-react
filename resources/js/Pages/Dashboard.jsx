import React, { useEffect, useState } from 'react'
import AppLayout from '@/Layouts/AppLayout';
import Select from "react-tailwindcss-select";
import { Head } from '@inertiajs/inertia-react';


const Dashboard = ({ list_siswa }) => {
    const [siswa, setSiswa] = useState(null);
    const handleSelect = (value) => {
        setSiswa(value);
    }
    return (
        <>
            <Head title='Dashboard' />
            <div className="lg:grid lg:grid-cols-4 lg:gap-4">
                <div>
                    {siswa && siswa.value}
                </div>
                <div>
                    <Select
                        primaryColor={"indigo"}
                        value={siswa}
                        onChange={handleSelect}
                        options={list_siswa}
                    />
                </div>
            </div>
        </>
    )
}

Dashboard.layout = page => <AppLayout children={page} />
export default Dashboard