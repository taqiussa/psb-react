import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react';
import AppLayout from '@/Layouts/AppLayout';

const Dashboard = () => {
    return (
        <div className='flex justify-center'>
            <Link href={route('logout')} method="post" as="button">
                Log Out
            </Link>
        </div>
    )
}

Dashboard.layout = page => <AppLayout children={page} />
export default Dashboard