import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import MenuSection from '@/Components/MenuSection';

export default function Cafe({ auth }) {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">
            <Head title="Cafe" />
            <Navbar auth={auth} />

            <div className="pt-10">
                <MenuSection />
            </div>
        </div>
    );
}
