import React from 'react'
import Logo from '../../../assets/azanylogofinal 3.svg'
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className='md:flex hidden items-center justify-between px-12 py-2 bg-[#470505]'>
            <img src={Logo} alt="Logo" />
            <div className="flex h-9 rounded-md w-1/3 overflow-hidden">
                <input
                    className='h-full w-full text-[#8B96A5] text-sm'
                    type="text"
                    placeholder='What can we help you find today?'
                />
                <div className="search px-2 grid place-items-center bg-[#DB4444]">
                    <Icon icon="iconamoon:search" color="white" height={20} />
                </div>
            </div>
            <div className="flex justify-between gap-4 items-center">
                <div className="flex gap-2 items-center">
                    <Icon icon="line-md:account" color='white' height={24} />
                    <span className='text-white'>Account</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Icon icon="mdi:cart-outline" color='white' height={24} />
                    <span className='text-white'>Cart</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Icon icon="emojione:flag-for-nigeria" width="24" />
                    <span className='text-white'>en - NGN</span>
                </div>
            </div>
        </div>
    )
}

export default Header