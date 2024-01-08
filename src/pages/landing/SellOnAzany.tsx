import React from 'react'
import Header from '../../components/General/Home/Header'
import Footer from '../../components/General/Home/Footer'
import Hero from '../../components/General/Home/Hero'
import hero from '../../assets/image (4).png'
import laptop from '../../assets/image (5).png'
import arrow from '../../assets/arrow 17.png'
import Img4 from '../../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import Img3 from '../../assets/image.png'
import Logo from '../../assets/azanylogofinal 2.png'

import { Icon } from '@iconify/react';
import MobileHeader from '../../components/General/MobileHeader'
import { Link } from 'react-router-dom'

const SellOnAzany = () => {
    const howTos = [
        {
            id: 1,
            heading: 'Create',
            body: 'Register in just 10 mins with valid address, & bank details'
        },
        {
            id: 2,
            heading: 'List',
            body: 'Register in just 10 mins with valid address, & bank details'
        },
        {
            id: 3,
            heading: 'Order',
            body: 'Register in just 10 mins with valid address, & bank details'
        },
        {
            id: 4,
            heading: 'Shipment',
            body: 'Register in just 10 mins with valid address, & bank details'
        },
        {
            id: 5,
            heading: 'Payment',
            body: 'Register in just 10 mins with valid address, & bank details'
        },
    ]
    return (
        <div className='bg-[#eeeeee]'>
            <Header />
            <MobileHeader />

            <div className="">
                <div className="flex flex-col-reverse md:flex-row justify-center px-6 md:px-36 gap-6 md:gap-20 item-center bg-[#FBF3EA]">
                    <div className="flex flex-col justify-center md:w-1/2 gap-5 text-left items-start ">
                        <h2 className=' font-bold text-3xl'>Become an Azany Seller and sell to our customers</h2>
                        <p className='font-semibold'>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.</p>
                        <div className="flex gap-6">
                            <Link to={'/sellers/register'} className='font-sm px-6 py-3 md:px-8 md:py-4 rounded-xl text-white bg-[#DB4444]'>Create Account</Link>
                            <button className='font-sm border rounded-xl border-[#DB4444] bg-transparent  px-6 py-3 md:px-8 md:py-4 text-[#DB4444] bg-[#DB4444]'>Learn more</button>
                        </div>
                    </div>
                    <div className="flex h-[300px] md:h-[500px]">
                        <img className='w-full h-full object-cover' src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:gap-20 gap-6 pt-12 md:pt-32">
                <div className="flex justify-center gap-4 flex-col items-center">
                    <h2 className='md:w-1/3 text-center font-bold text-3xl'>Why do sellers love selling on ️Azany?</h2>
                    <p className='md:w-1/3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center px-6 md:px-16">
                    <div className="flex rounded-2xl gap-2 bg-[#FFF6D7] flex-col items-start px-8 py-12">
                        <span className=" h-11 w-11 bg-black rounded-full"></span>
                        <h3 className="font-semibold">Opportunity</h3>
                        <p className="text-[#42526B] text-sm">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                    </div>
                    <div className="flex rounded-2xl gap-2 bg-[#EEF9F2] flex-col items-start px-8 py-12">
                        <span className=" h-11 w-11 bg-black rounded-full"></span>
                        <h3 className="font-semibold">Easy For Everyone</h3>
                        <p className="text-[#42526B] text-sm">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                    </div>
                    <div className="flex rounded-2xl gap-2 bg-[#FFE3E3] flex-col items-start px-8 py-12">
                        <span className=" h-11 w-11 bg-black rounded-full"></span>
                        <h3 className="font-semibold">Additional Support</h3>
                        <p className="text-[#42526B] text-sm">Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:gap-20 gap-6 pt-12 md:pt-32">
                <div className="flex justify-center flex-col gap-4 items-center">
                    <h2 className='md:w-1/3 text-center font-bold text-3xl'>Your Journey on Azany</h2>
                    <p className='md:w-1/3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 md:px-20 px-5">
                    {
                        howTos.map((item, index) => (
                            <div key={index} className="flex flex-col text-center gap-6 items-center">
                                <span className='bg-[#DB4444] h-12 w-12 grid font-semibold text-white place-items-center rounded-full'>{item.id}</span>
                                <div className="flex flex-col gap-4 items-center">
                                    <h3 className='text-xl font-medium'>{item.heading}</h3>
                                    <p className="">{item.body}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col md:gap-20 gap-6 py-12 md:py-32">
                <div className="flex justify-center gap-4 flex-col items-center">
                    <h2 className='md:w-1/4 text-center font-bold text-3xl'>Some amazing features <span className="text-[#DB4444]">you’ll love</span></h2>
                    <p className='md:w-1/3 text-center'>Take a sneak peek 👀 into our platform</p>
                </div>
                <div className="flex flex-col items-center p-3 md:px-16">
                    <div className="flex flex-col-reverse md:flex-row w-full relative bg-[#EEF9F2] gap-6 text:center md:text-left items-center md:items-start px-6 md:px-20 md:gap-24 py-12">
                        <div className="flex flex-col justify-center md:w-1/2 gap-5 text-center md:text-left items-center md:items-start ">
                            <h2 className=' font-bold text-3xl'>User friendly personalized homepage</h2>
                            <p className='font-semibold'>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.</p>
                        </div>
                        <div className="flex h-[240px] md:h-[400px]">
                            <img className='w-full h-full object-cover' src={laptop} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row w-full relative bg-[#FFF4DB] gap-6 text:center md:text-left items-center md:items-start px-6 md:px-20 md:gap-24 py-12">
                        <div className="flex flex-col justify-center md:w-1/2 gap-5 text-center md:text-left items-center md:items-start ">
                            <h2 className=' font-bold text-3xl'>Easy product listing</h2>
                            <p className='font-semibold'>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.</p>
                        </div>
                        <div className="flex h-[240px] md:h-[400px]">
                            <img className='w-full h-full object-cover' src={laptop} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row w-full relative bg-[#E4E8FF] gap-6 text:center md:text-left items-center md:items-start px-6 md:px-20 md:gap-24 py-12">
                        <div className="flex z-10 flex-col justify-center md:w-1/2 gap-5 text-center md:text-left items-center md:items-start ">
                            <h2 className=' font-bold text-3xl'>Selection insights</h2>
                            <p className='font-semibold'>The fastest-growing and preferred acquisition channel for over half our multichannel sellers.</p>
                        </div>
                        <div className="flex h-[240px] md:h-[400px]">
                            <img className='w-full h-full object-cover' src={laptop} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex relative bg-[#470505] md:px-28 px-6 py-10 text-white justify-between items-center">
                <div className="flex flex-col gap-5 items-center z-10 md:items-start">
                    <h2 className="font-bold text-3xl">We are expanding</h2>
                    <p className=''>Be among the first to expand to our emerging marketplaces</p>
                    <button className='py-4 px-8 rounded-[36px] bg-[#DB4444]'>Start Selling</button>
                </div>
                <div className="flex absolute scale-[0.8] bottom-0 md:relative">
                    <img src={Img3} alt="" className=" w-full object-cover" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SellOnAzany