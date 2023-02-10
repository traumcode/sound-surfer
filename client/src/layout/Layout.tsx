import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '~/components/Footer';
import { NavBar } from '~/components/NavBar';
import Sidebar from '~/components/Sidebar';

const Layout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = (): void => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex">
                <nav className="w-56 flex-none bg-emerald-300">
                    <Sidebar />
                </nav>
                <main className="flex-1 min-w-0 overflow-auto">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
