import React from 'react'
import Header from '../../components/General/Home/Header'
import Footer from '../../components/General/Home/Footer'
import Hero from '../../components/General/Home/Hero'
import Img1 from '../../assets/Frame 1000006853.png'
import Img2 from '../../assets/Group 112.png'
import Img3 from '../../assets/image.png'

import { Icon } from '@iconify/react';
import MobileHeader from '../../components/General/MobileHeader'

const RewardGloPoint = () => {
    const howTos = [
        {
            id: 1,
            heading: 'Sign Up',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            heading: 'Add product to cart',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 3,
            heading: 'Shop like 5 times',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 4,
            heading: 'Refer someone',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            heading: 'Get Rewarded',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]
    return (
        <div className='bg-[#eeeeee]'>
            <Header />
            <MobileHeader />
            <div className="flex p-7">
                <Hero />
            </div>
            <div className="px-4">
                <div className="flex flex-col-reverse md:flex-row justify-between gap-6 px-6 py-5 md:px-24 md:py-20 item-center md:items-start bg-black text-white">
                    <div className="flex flex-col gap-5 text-left items-start md:w-1/3">
                        <h2 className=' font-semibold text-2xl'>What is RewardGlo Point</h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                    </div>
                    <div className="flex h-[274px]">
                        <img className='w-full h-full object-cover' src={Img1} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex p-7 items-center py-20 gap-20 flex-col text-center">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="font-bold text-3xl ">How to get reward Point</h2>
                    <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 md:gap-8 md:px-20 px-5">
                    {
                        howTos.map((item, index) => (
                            <div className="flex flex-col gap-6 items-center">
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
            <div className="flex md:flex-row flex-col p-7 gap-6 md:gap-32 justify-between items-center">
                <div className="flex">
                    <img className='w-full h-full object-cover' src={Img2} alt="" />
                </div>
                <div className="flex flex-col md:w-3/5 gap-14">
                    <h2 className='font-bold text-4xl md:w-2/3'>What you can use it for</h2>
                    <div className="grid md:grid-cols-2 place-items-center grid-cols-1 md:gap-16 md:gap-y-12 gap-6">
                        <div className="flex items-center md:items-start gap-3 flex-col">
                            <span className='bg-[#7ED09C] p-5 mb-3 rounded-2xl'>
                                <Icon icon="ic:baseline-shopping-bag" />
                            </span>
                            <h2 className='font-semibold text-xl'>Pay for Shopping</h2>
                            <p className='text-[#606176] text-center md:text-left md:w-4/5'>The only costs are for standard school supplies and voluntary field trips.</p>
                        </div>
                        <div className="flex items-center md:items-start gap-3 flex-col">
                            <span className='bg-[#7ED09C] p-5 mb-3 rounded-2xl'>
                                <Icon icon="ic:baseline-shopping-bag" />
                            </span>
                            <h2 className='font-semibold text-xl'>Recharge Card</h2>
                            <p className='text-[#606176] text-center md:text-left md:w-4/5'>Many of our Connections Academy schools have additional accreditations.</p>
                        </div>
                        <div className="flex items-center md:items-start gap-3 flex-col">
                            <span className='bg-[#7ED09C] p-5 mb-3 rounded-2xl'>
                                <Icon icon="ic:baseline-shopping-bag" />
                            </span>
                            <h2 className='font-semibold text-xl'>Online curriculum</h2>
                            <p className='text-[#606176] text-center md:text-left md:w-4/5'>Our curriculum prepares students to go further in life by giving them support.</p>
                        </div>
                        <div className="flex items-center md:items-start gap-3 flex-col">
                            <span className='bg-[#7ED09C] p-5 mb-3 rounded-2xl'>
                                <Icon icon="ic:baseline-shopping-bag" />
                            </span>
                            <h2 className='font-semibold text-xl'>Social Interaction</h2>
                            <p className='text-[#606176] text-center md:text-left md:w-4/5'>Students at Connections Academy collaborate on projects together.</p>
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

export default RewardGloPoint