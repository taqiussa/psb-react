import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const DataPendaftar = ({ listPendaftar }) => {

    return (
        <>
            <Head title='Data Pendaftar' />
            <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                <div className="overflow-x-auto">
                    <table className=" border border-slate-500 border-separate w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kode</th>
                                <th>Nama</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listPendaftar.map((a, index) => (
                                <tr className=' text-slate-600'>
                                    <td>{index + 1}</td>
                                    <td>{a.kode_daftar}</td>
                                    <td>{a.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

DataPendaftar.layout = page => <AppLayout children={page} />
export default DataPendaftar