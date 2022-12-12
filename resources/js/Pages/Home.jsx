import AppLayout from '@/Layouts/AppLayout'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const Home = () => {
    return (
        <>
        <Head title='Home' />
        <div className="flex justify-center">
            Home
        </div>
        </>
    )
}

Home.layout = page => <AppLayout children={page} />
export default Home