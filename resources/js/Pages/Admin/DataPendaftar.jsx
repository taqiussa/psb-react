import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import Table from '../Table/Index'

const DataPendaftar = ({ listPendaftar }) => {
    const [rowData, setRowData] = useState([])

    const onAddRowClick = () => {

        setRowData(

            rowData.concat({ username: "", email: "", gender: "", phone: "" })

        )



    }

    const columns = [

        {

            Header: "Name",

            accessor: "username",

        },

        {

            Header: "Email",

            accessor: "email",

        },

        {

            Header: "Gender",

            accessor: "gender",

        },

        {

            Header: "Phone",

            accessor: "phone",

        },

    ]
    return (
        <>
            <Head title='Data Pendaftar' />
            <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                <div className="container mx-auto">

                    <button

                        onClick={onAddRowClick}

                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

                    >

                        Add Row

                    </button>

                    <div className="flex justify-center mt-8">

                        <Table columns={columns} data={rowData} />

                    </div>

                </div>
                {/* <div className="overflow-x-auto">
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
                </div> */}
            </div>
        </>
    )
}

DataPendaftar.layout = page => <AppLayout children={page} />
export default DataPendaftar