import React from 'react'
import Logo from '../../../assets/Logo.svg'
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div className="flex flex-col w-full">
            <div className='bg-black gap-8 md:gap-28 text-white w-full flex flex-col md:flex-row px-12 py-8 md:px-32 md:py-20 pb-14 items-start justify-between'>
                <div className="flex w-full flex-col items-start gap-6">
                    <img className='' src={Logo} alt="azany logo" />
                    <div className="flex flex-col items-start gap-[6px]">
                        <span>Subscribe</span>
                        <span className='flex items-center gap-1'>
                            <a className='text-[#DB4444] underline' href="/login">Login</a>or
                            <a className='text-[#DB4444] underline' href="/signup">Create Account</a>
                        </span>
                        <span>Get the latest deals & more</span>
                    </div>
                    <div className="flex items-center border border-white">
                        <input className='w-full bg-transparent border-none text-[#FAFAFA]' placeholder='Enter your Email' type="text" />
                        <span className='p-2'>
                            <Icon icon="carbon:send" color="white" width="24" />
                        </span>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <Icon icon="ri:facebook-line" color="white" width="24" />
                        <Icon icon="ri:twitter-line" color="white" width="24" />
                        <Icon icon="ri:instagram-line" color="white" width="24" />
                        <Icon icon="ri:linkedin-line" color="white" width="24" />
                    </div>
                </div>
                <ul className='flex w-full items-start flex-col gap-4'>
                    <li className='text-xl font-semibold mb-2'>Support</li>
                    <li className=''>333 Freemont Street, California</li>
                    <li className=''>support@azany.com</li>
                    <li className=''>+88015-88888-9999</li>
                </ul>
                <ul className='flex w-full items-start flex-col gap-4'>
                    <li className='text-xl font-semibold mb-2'>Account</li>
                    <li className=''>My Account</li>
                    <li className=''>Login / Register</li>
                    <li className=''>Cart</li>
                    <li className=''>Wishlist</li>
                </ul>
                <ul className='flex w-full items-start flex-col gap-4'>
                    <li className='text-xl font-semibold mb-2'>Quick Link</li>
                    <li className=''>Privacy Policy</li>
                    <li className=''>Terms Of Use</li>
                    <li className=''>FAQ</li>
                    <li className=''>Contact</li>

                </ul>
            </div>
            <div className="flex w-full py-5 border-t bg-black justify-center pb-7 border-t-[#141414] items-center gap-2">
                <Icon icon="ph:copyright" color="#393939" width="24" />
                <span className='text-[#393939]'>Copyright Azany 2023. All right reserved</span>
            </div>
        </div>
    )
}

export default Footer