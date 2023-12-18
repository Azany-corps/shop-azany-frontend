import React from 'react'
import Header from '../../components/General/Home/Header'
import Footer from '../../components/General/Home/Footer'
import Hero from '../../components/General/Home/Hero'
import Img1 from '../../assets/hannah-busing-Zyx1bK9mqmA-unsplash.jpg'
import Img2 from '../../assets/jakob-owens-O_bhy3TnSYU-unsplash.jpg'
import Img4 from '../../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'
import Img3 from '../../assets/image.png'
import Logo from '../../assets/azanylogofinal 2.png'

import { Icon } from '@iconify/react';

const AboutUs = () => {
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
            <div className="p-4">
                <div className="flex justify-center gap-10 px-24 py-20 items-start rounded-xl bg-black text-white">
                    <div className="flex flex-col gap-5 text-left items-start w-1/3">
                        <h2 className=' font-semibold text-2xl'>A Family That Keeps On Growing</h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                    </div>
                    <div className="flex h-[274px]">
                        <img className='w-full h-full object-cover' src={Img4} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex relative px-4 gap-9 py-6">
                <div className="flex h-80 w-2/5 rounded-xl overflow-hidden">
                    <img className='h-full w-full object-cover' src={Img1} alt="" />
                </div>
                <div className="flex items-start w-3/5 gap-6 py-6 flex-col">
                    <div className="flex gap-4 items-end">
                        <span>
                            <img className='h-12' src={Logo} alt="" />
                        </span>
                        <span className='font-bold text-4xl'>Azany.com</span>
                    </div>
                    <p className=''>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec e diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor.
                    </p>
                </div>
            </div>

            <div className="flex relative px-4 gap-9 py-6">
                <div className="flex bg-[#EEF9F2] gap-9 p-7">
                    <div className="flex h-80 w-2/5 rounded-xl overflow-hidden">
                        <img className='h-full w-full object-cover' src={Img2} alt="" />
                    </div>
                    <div className="flex items-start w-3/5 gap-6 py-6 flex-col">
                        <div className="flex gap-4 items-end">
                            <span className='bg-[#0156FF] rounded-t-full rounded-l-full p-3'>
                                <Icon icon="ic:round-star" color="white" />
                            </span>
                            <span className='font-bold text-4xl'>The Highest Quality of Products</span>
                        </div>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec e diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center py-20 flex-col px-7 gap-12">
                <div className="flex gap-4 items-end">
                    <span className='bg-[#0156FF] rounded-t-full rounded-l-full p-3'>
                        <Icon icon="mdi:truck-delivery" color="white" height={35} />
                    </span>
                    <span className='font-medium text-[50px]'>The Highest Quality of Products</span>
                </div>
                <p className='text-2xl text-[#231F20] text-center w-3/5'>
                    We deliver our goods all across Nigeria. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be
                </p>
            </div>

            <div className="flex bg-[#470505] px-28 py-10 text-white justify-between items-center">
                <div className="flex flex-col gap-5 items-start">
                    <h2 className="font-bold text-3xl">We are expanding</h2>
                    <p className=''>Be among the first to expand to our emerging marketplaces</p>
                    <button className='py-4 px-8 rounded-[36px] bg-[#DB4444]'>Start Selling</button>
                </div>
                <div className="flex">
                    <img src={Img3} alt="" className="h-full w-full object-cover" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs