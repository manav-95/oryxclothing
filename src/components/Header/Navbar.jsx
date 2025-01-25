import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';

function Navbar() {
    const [isTopBarVisible, setIsTopBarVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setIsTopBarVisible(false);
            } else {
                setIsTopBarVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Top Bar for Contact Details on Mobile */}
            {isTopBarVisible && (
                <div className='w-full fixed top-16 left-0 z-50 bg-gray-100 py-2 sm:hidden'>
                    <div className='max-w-7xl container mx-auto px-4 flex justify-center space-x-4 font-semibold text-sm min-[425px]:text-base text-gray-600'>
                        <p>+91 1234567890</p>
                        <p>oryxclothing@info.com</p>
                    </div>
                </div>
            )}

            {/* Main Navbar */}
            <div className='w-full fixed top-0 left-0 z-50 py-2 bg-white shadow-md'>
                <div className='max-w-7xl container mx-auto px-4'>
                    <div className='flex flex-wrap items-center justify-between'>
                        {/* Logo Section */}
                        <div 
                            onClick={() => { location.reload(); }} 
                            className='flex items-center cursor-pointer'>
                            <img
                                src={Logo}
                                alt="Logo"
                                className='w-12 h-12 md:w-16 md:h-16'
                            />
                            <h2 className='font-bold text-xl md:text-3xl text-gray-800 font-sans uppercase ml-2'>Oryx Clothing</h2>
                        </div>

                        {/* Contact Details for Medium and Larger Screens */}
                        <div className='hidden sm:flex items-center space-x-4 font-semibold text-lg text-gray-600'>
                            <p className='hover:text-red-400 transition-all'>+91 1234567890</p>
                            <p className='hover:text-red-400 transition-all'>oryxclothing@info.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
