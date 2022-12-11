import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const AppLayout = ({ children }) => {
    const [open, setOpen] = useState(false);

    const openSide = () => {
        setOpen(true);
    }

    const closeSide = () => {
        setOpen(false);
    }

    return (
        <>
            {/* Left Col */}
            <Sidebar open={open} closeSide={closeSide} />
            {/* End Left Col */}

            {/*  Right Col  */}
            <div className="max-w-full min-h-screen ml-0 transition lg:ml-64 lg:max-w-7xl xl:max-w-full">
                {/*  NavBar  */}
                <Navbar openSide={openSide} />
                {/* End Navbar */}
                {/*  Main Content  */}
                <div className="px-2 py-2 container-fluid">
                    <main>
                        {children}
                    </main>
                </div>
                {/* End Main Content */}
            </div>
            {/* End Right Col */}
        </>
    )
}

export default AppLayout