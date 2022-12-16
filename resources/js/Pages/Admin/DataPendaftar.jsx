import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/inertia-react'
import React, { useEffect, useState } from 'react'
import Table from '../Table/Index'
import Searchbar from '../Table/Searchbar'
const DataPendaftar = ({ listPendaftar }) => {
    // const rowdata = listPendaftar.map((pendaftar) => ({
    //     name: pendaftar.name,
    //     kodeDaftar: pendaftar.kode_daftar,
    //     panitia: pendaftar.panitia.name
    // }));

    const [rowData, setRowData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [skipPageReset, setSkipPageReset] = useState(false);

    useEffect(() => {
        setRowData(
            listPendaftar.map((pendaftar) => ({
                name: pendaftar.name,
                kodeDaftar: pendaftar.kode_daftar,
                panitia: pendaftar.panitia.name
            }))
        )
    }, [])
    const columns = [
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Kode Daftar",
            accessor: "kodeDaftar",
        },
        {
            Header: "Panitia",
            accessor: "panitia",
        },

    ]

    const onSearchbarChange = (e) => {
        const value = e.target.value;

        if (value === "") {
            setFilteredData(rowData);
        } else {
            if (filteredData.length > 0) {
                const result = filteredData.filter((item) => item.name === value);

                setFilteredData(result);
            } else {
                const result = rowData.filter((item) => item.name === value);

                setFilteredData(result);
            }
        }
    };

    useEffect(() => {
        console.log(filteredData);
    },[filteredData])
    return (
        <>
            <Head title='Data Pendaftar' />
            <div className="block border border-slate-300 p-4 shadow-md rounded-lg mb-5">
                <div className="container mx-auto">
                    <Searchbar onChange={onSearchbarChange} />
                    <div className="flex justify-center mt-8">
                        <Table columns={columns} data={filteredData.length > 0 ? filteredData : rowData} />
                    </div>
                </div>
            </div>
        </>
    )
}

DataPendaftar.layout = page => <AppLayout children={page} />
export default DataPendaftar