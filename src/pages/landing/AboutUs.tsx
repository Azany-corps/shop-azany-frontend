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
import MobileHeader from '../../components/General/MobileHeader'

const AboutUs = () => {

    return (
        <div className='bg-[#eeeeee]'>
            <Header />
            <MobileHeader />

            <div className="p-4">
                <div className="flex md:flex-row flex-col-reverse justify-center gap-6 px-6 py-5 md:gap-10 md:px-24 md:py-20 items-center md:items-start rounded-xl bg-black text-white">
                    <div className="flex flex-col gap-5 text-left items-start md:w-1/3">
                        <h2 className=' font-semibold text-2xl'>A Family That Keeps On Growing</h2>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                        <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                    </div>
                    <div className="flex h-[274px]">
                        <img className='w-full h-full object-cover' src={Img4} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex md:flex-row flex-col relative px-4 md:gap-9 gap-4 py-6">
                <div className="flex h-80 md:w-2/5 rounded-xl overflow-hidden">
                    <img className='h-full w-full object-cover' src={Img1} alt="" />
                </div>
                <div className="flex items-start md:w-3/5 gap-6 py-6 flex-col">
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

            <div className="flex relative px-4 py-6">
                <div className="flex md:flex-row flex-col bg-[#EEF9F2] md:gap-9 gap-4 p-7">
                    <div className="flex h-80 md:w-2/5 rounded-xl overflow-hidden">
                        <img className='h-full w-full object-cover' src={Img2} alt="" />
                    </div>
                    <div className="flex items-start nd:w-3/5 gap-6 py-6 flex-col">
                        <div className="flex gap-4 items-end">
                            <span className='bg-[#0156FF] rounded-t-full rounded-l-full p-3'>
                                <Icon icon="ic:round-star" color="white" />
                            </span>
                            <span className='font-bold text-3xl md:text-4xl'>The Highest Quality of Products</span>
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
                    <span className='font-medium text-4xl md:text-[50px]'>We Deliver to Any Regions</span>
                </div>
                <p className='text-xl text-[#231F20] text-center md:w-3/5'>
                    We deliver our goods all across Nigeria. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be
                </p>
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

export default AboutUs