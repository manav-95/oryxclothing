import React from 'react'
import Logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white py-8">
            <div className="max-w-7xl container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Logo and Heading */}
                    <div className='flex flex-col items-start justify-start'>
                        <img src={Logo} alt="Logo" className="h-20 w-20 mb-4 bg-white rounded-full" />
                        <h2 className="text-2xl font-bold uppercase">Oryx Clothing</h2>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                        <div className='flex flex-col space-y-1'>
                            <p className="text-base font-medium">Email: contact@company.com</p>
                            <p className="text-base font-medium">Phone: +123 456 7890</p>
                            <p className="text-base font-medium">Address: 1234 Street Name, City, Country</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-red-400">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Map */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Find Us</h3>
                        <iframe
                            className='w-full h-[240px] min-[425px]:h-[300px] sm:h-[360px] lg:h-[140px] xl:h-[180px] '
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1652.2363250526444!2d72.85620321479436!3d19.280419029934272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b14b85471899%3A0xafed9628453dbe6!2sA9business!5e1!3m2!1sen!2sin!4v1737793501523!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl container mx-auto px-4 mt-6' >
                <hr />
            </div>

            <div className="text-center text-sm font-medium mt-8 tracking-wider">
                <p className='mb-1'>&copy; {new Date().getFullYear()} Oryx Clothing. All rights reserved.</p>
                <a href='https://a9business.in/' target='_blank' className='text-red-400'>Designed by a9business.in</a>
            </div>
        </footer>
    )
}

export default Footer
