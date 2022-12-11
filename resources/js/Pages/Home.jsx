import AppLayout from '@/Layouts/AppLayout'
import React from 'react'

const Home = () => {
    return (
        <div>Home</div>
    )
}

Home.layout = page => <AppLayout children={page} />
export default Home