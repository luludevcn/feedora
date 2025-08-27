export default function Footer() {
    return (<>
        {/* <!-- Footer --> */}
        < footer className='bg-gray-900 text-white pt-16 pb-8' >
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12'>
                    <div className='lg:col-span-2'>
                        <div className='flex items-center mb-6'>
                            <div className='w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mr-2'>
                                F
                            </div>
                            <span className='text-xl font-bold'>
                                Feedora
                            </span>
                        </div>
                        <p className='text-gray-400 mb-6 max-w-md'>
                            {` Gather insights like never before with Feedora's powerful feedback collection and analysis platform.`}
                        </p>
                        <div className='flex space-x-4'>
                            <a href='javascript:void(0);' className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors'>
                                <i className='fab fa-twitter'>
                                </i>
                            </a>
                            <a href='javascript:void(0);' className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors'>
                                <i className='fab fa-linkedin'>
                                </i>
                            </a>
                            <a href='javascript:void(0);' className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors'>
                                <i className='fab fa-facebook'>
                                </i>
                            </a>
                            <a href='javascript:void(0);' className='w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors'>
                                <i className='fab fa-instagram'>
                                </i>
                            </a>
                        </div>
                    </div>
                    <div >
                        <h4 className='text-lg font-bold mb-6'>
                            Product
                        </h4>
                        <ul className='space-y-4'>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Features
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Templates
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Pricing
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Integrations
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h4 className='text-lg font-bold mb-6'>
                            Resources
                        </h4>
                        <ul className='space-y-4'>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Documentation
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Guides
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Blog
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Webinars
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <h4 className='text-lg font-bold mb-6'>
                            Company
                        </h4>
                        <ul className='space-y-4'>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    About Us
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Careers
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Press
                                </a>
                            </li>
                            <li >
                                <a href='javascript:void(0);' className='text-gray-400 hover:text-white transition-colors'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-800 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <p className='text-gray-500 text-sm mb-4 md:mb-0'>
                            ©
                            2025 Feedora. All rights reserved.
                        </p>
                        <div className='flex space-x-6'>
                            <a href='javascript:void(0);' className='text-gray-500 hover:text-white text-sm transition-colors'>
                                Privacy Policy
                            </a>
                            <a href='javascript:void(0);' className='text-gray-500 hover:text-white text-sm transition-colors'>
                                Terms of Service
                            </a>
                            <a href='javascript:void(0);' className='text-gray-500 hover:text-white text-sm transition-colors'>
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    </>
    )
}