import { usePage } from '@inertiajs/inertia-react';
import SidebarLink from '@/Components/SidebarLink';
import React from 'react'

const Sidebar = ({ open, closeSide }) => {
    const { auth, role } = usePage().props;
    return (
        <div>
            <div className={`w-[250px] h-full py-5 px-0 fixed overflow-x-hidden overflow-y-scroll myscroll top-0 left-0 z-50 shadow-md transition duration-500 lg:translate-x-0 bg-white ${open ? 'translate-x-0 ease-in' : '-translate-x-64 ease-out'}`}>
                <div className="px-4 space-y-2">
                    <button onClick={() => closeSide()} className="absolute p-1 text-white transition duration-500 transform border-2 rounded-full shadow-md bg-emerald-600 right-5 top-5 border-emerald-700 hover:bg-emerald-500 focus:bg-emerald-500 lg:invisible">
                        <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
                        </svg>
                    </button>
                    <h1 className="block py-8 text-2xl font-bold text-emerald-700">{auth.user.name}</h1>
                    <SidebarLink href={route('pendaftaran.create')} active={route().current('pendaftaran.create')}>
                        Pendaftaran
                    </SidebarLink>
                    <SidebarLink href={route('pendaftaran.index')} active={route().current('pendaftaran.index')}>
                        Data Pendaftar
                    </SidebarLink>
                    <SidebarLink href={route('logout')} method="post" as="button">
                        Logout
                    </SidebarLink>
                </div>
            </div >
        </div>
    )
}

export default Sidebar