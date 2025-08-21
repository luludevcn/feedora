'use client'

import Link from "next/link"

export default function Header() {
    return (
        <header id='navbar' className='fixed w-full bg-white/90 backdrop-blur-sm z-50 transition-all duration-300 shadow-sm'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16 md:h-20'>
                    {/* <!-- Logo --> */}
                    <div className='flex items-center'>
                        <a href='javascript:void(0);' className='flex items-center'>
                            <div className='w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mr-2'>
                                F
                            </div>
                            <span className='text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>
                                Feedora
                            </span>
                        </a>
                    </div>
                    {/* <!-- Desktop Navigation --> */}
                    <nav className='hidden md:flex items-center space-x-8'>
                        <a href='javascript:void(0);' className='text-gray-700 hover:text-primary font-medium transition-colors'>
                            Features
                        </a>
                        <a href='javascript:void(0);' className='text-gray-700 hover:text-primary font-medium transition-colors'>
                            Templates
                        </a>
                        <a href='javascript:void(0);' className='text-gray-700 hover:text-primary font-medium transition-colors'>
                            Pricing
                        </a>
                        <a href='javascript:void(0);' className='text-gray-700 hover:text-primary font-medium transition-colors'>
                            Resources
                        </a>
                    </nav>
                    {/* <!-- CTA Buttons --> */}
                    <div className='hidden md:flex items-center space-x-4'>
                        {/* <Link href='/login' className='text-gray-700 hover:text-primary font-medium transition-colors'>
                            Login
                        </Link> */}
                        <Link href='/login' className='bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg'>
                            Get Started Free
                        </Link>
                        {/* <ModeToggle></ModeToggle> */}
                    </div>
                    {/* <!-- Mobile Menu Button --> */}
                    <div className='md:hidden flex items-center'>
                        <button id='mobile-menu-button' className='text-gray-700 hover:text-primary focus:outline-none'>
                            <i className='fas fa-bars text-xl'>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Mobile Navigation --> */}
            <div id='mobile-menu' className='hidden md:hidden bg-white border-t border-gray-100 shadow-lg'>
                <div className='container mx-auto px-4 py-3 space-y-3'>
                    <a href='javascript:void(0);' className='block py-2 text-gray-700 hover:text-primary font-medium transition-colors'>
                        Features
                    </a>
                    <a href='javascript:void(0);' className='block py-2 text-gray-700 hover:text-primary font-medium transition-colors'>
                        Templates
                    </a>
                    <a href='javascript:void(0);' className='block py-2 text-gray-700 hover:text-primary font-medium transition-colors'>
                        Pricing
                    </a>
                    <a href='javascript:void(0);' className='block py-2 text-gray-700 hover:text-primary font-medium transition-colors'>
                        Resources
                    </a>
                    <div className='pt-2 flex flex-col space-y-3'>
                        <a href='javascript:void(0);' className='text-center text-gray-700 hover:text-primary font-medium transition-colors py-2'>
                            Login
                        </a>
                        <a href='javascript:void(0);' className='text-center bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg font-medium transition-colors shadow-md'>
                            Get Started Free
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
