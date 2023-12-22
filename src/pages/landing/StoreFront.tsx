import React, { useState } from 'react'
import Header from '../../components/General/Home/Header'
import Footer from '../../components/General/Home/Footer'
import Hero from '../../components/General/Home/Hero'
import Banner from '../../assets/Banner.png'
import Banner1 from '../../assets/Widget.png'
import Banner2 from '../../assets/Widget (1).png'
import Banner3 from '../../assets/Widget (2).png'
// import Img1 from '../../assets/Image (1).png'
// import Img2 from '../../assets/Image (2).png'
// import Img3 from '../../assets/Rectangle 4287 (7).png'
import { Icon } from '@iconify/react';
import MobileHeader from '../../components/General/MobileHeader'
import ProductGroupCard from '../../components/General/Home/ProductGroupCard'
import { BestSelling, BestSellings } from './resource'

const StoreFront = () => {
    const [tab, setTab] = useState<string>("product")

    return (
        <div className='bg-[#eeeeee]'>
            <Header />
            <MobileHeader />
            <div className="flex p-2">
                <div className="flex w-full h-[370]">
                    <img className='h-full w-full object-cover' src={Banner} alt="" />
                </div>
            </div>
            <div className="flex p-2 ">
                <div className="flex flex-col md:flex-row items-start w-full gap-6 md:gap-16 text-[15px] font-medium bg-white rounded-xl p-5">
                    <div className="flex items-start gap-7">
                        <span className=" h-28 bg-red-400 w-28 rounded-full overflow-hidden">
                            {/* <img className='h-full w-full object-cover' src="" alt="" /> */}
                        </span>
                        <div className="flex flex-col pt-4 items-start gap-2">
                            <h2 className='text-2xl font-bold'>Mooi Enterprise</h2>
                            <p className="text-[#B3B7BB] text-[15px] font-bold">2nd October 2022</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-24 pt-4">
                        <div className="flex flex-col items-start gap-2">
                            <p className="text-[#B3B7BB] text-[15px] font-bold">Certificate</p>
                            <div className="flex items-center gap-3">
                                <p className="">Corporate affairs commission</p>
                                <Icon icon="ic:round-verified" color="#279f51" />
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="">Nigerian traders association</p>
                                <Icon icon="ic:round-verified" color="#279f51" />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <p className='text-[#B3B7BB] text-[15px] font-bold'>Sales record</p>
                            <p className="">2382 Sales</p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <p className='text-[#B3B7BB] text-[15px] font-bold'>Country</p>
                            <p className="">Afganistan</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-2">
                <div className="flex gap-4 w-full rounded-md h-12 border border-[#D65D5B] bg-white p-2">
                    <span onClick={() => setTab("product")} className={`${tab === "product" ? 'bg-[#D65D5B] text-white' : 'bg-white text-[#D65D5B]'} hover:cursor-pointer  rounded-md text-[15px] font-bold grid place-items-center w-full h-full`}>Product</span>
                    <span onClick={() => setTab("review")} className={`${tab === "review" ? 'bg-[#D65D5B] text-white' : 'bg-white text-[#D65D5B]'} hover:cursor-pointer  rounded-md text-[15px] font-bold grid place-items-center w-full h-full`}>Reviews</span>
                </div>
            </div>
            {
                tab === "product" ? (
                    <div className="flex flex-col">
                        <div className="flex p-2 md:p-7">
                            <ProductGroupCard products={BestSelling} showSlider={false} flex={false} />
                        </div>
                        <div className="flex p-2 md:p-7 pt-0">
                            <div className="flex flex-col md:flex-row w-full gap-4">
                                <div className="flex rounded-xl h-full w-full overflow-hidden">
                                    <img className='h-[192px]  md:h-full w-full object-cover' src={Banner1} alt="" />
                                </div>
                                <div className="flex md:flex-col items-center w-full md:w-1/3 h-full gap-4">
                                    <div className="flex w-full h-full rounded-xl overflow-hidden">
                                        <img className='h-full w-full object-cover' src={Banner2} alt="" />
                                    </div>
                                    <div className="flex w-full h-full rounded-xl overflow-hidden">
                                        <img className='h-full w-full object-cover' src={Banner3} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex p-2 md:p-7 pt-0">
                            <ProductGroupCard products={BestSellings} showSlider={false} flex={false} />
                        </div>
                        <div className="flex p-2 md:p-7 pt-0">
                            <ProductGroupCard products={BestSellings} showSlider={false} flex={false} />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col w-full">
                        <div className="flex p-7 w-full md:w-[27%] flex-col">
                            <h2 className='font-bold text-lg'>Ratings and reviews</h2>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#B3B7BB]">321 Comments</p>
                                <p className="text-[#B3B7BB]">5.126 Global rating</p>
                                <div className="flex flex-col gap-4 items-start">
                                    <div className="flex w-full items-center gap-4">
                                        <p className="flex gap-2">
                                            <span>5</span>
                                            star
                                        </p>
                                        <span className='flex h-5 w-full rounded-lg overflow-hidden bg-[#DFDEDE]'>
                                            <span className='bg-[#FFD700] w-2/3 h-full'></span>
                                        </span>
                                        <p className="w-fit">1023</p>
                                    </div>
                                    <div className="flex w-full items-center gap-4">
                                        <p className="flex gap-2">
                                            <span>5</span>
                                            star
                                        </p>
                                        <span className='flex h-5 w-full rounded-lg overflow-hidden bg-[#DFDEDE]'>
                                            <span className='bg-[#FFD700] w-2/3 h-full'></span>
                                        </span>
                                        <p className="w-fit">1023</p>
                                    </div>
                                    <div className="flex w-full items-center gap-4">
                                        <p className="flex gap-2">
                                            <span>5</span>
                                            star
                                        </p>
                                        <span className='flex h-5 w-full rounded-lg overflow-hidden bg-[#DFDEDE]'>
                                            <span className='bg-[#FFD700] w-2/3 h-full'></span>
                                        </span>
                                        <p className="w-fit">1023</p>
                                    </div>
                                    <div className="flex w-full items-center gap-4">
                                        <p className="flex gap-2">
                                            <span>5</span>
                                            star
                                        </p>
                                        <span className='flex h-5 w-full rounded-lg overflow-hidden bg-[#DFDEDE]'>
                                            <span className='bg-[#FFD700] w-2/3 h-full'></span>
                                        </span>
                                        <p className="w-fit">1023</p>
                                    </div>
                                    <div className="flex w-full items-center gap-4">
                                        <p className="flex gap-2">
                                            <span>5</span>
                                            star
                                        </p>
                                        <span className='flex h-5 w-full rounded-lg overflow-hidden bg-[#DFDEDE]'>
                                            <span className='bg-[#FFD700] w-2/3 h-full'></span>
                                        </span>
                                        <p className="w-fit">1023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid p-7 pt-0 grid-cols-1 md:grid-cols-2 gap-4">
                            {
                                [1, 2, 3, 4, 5, 6].map((items, index) => (
                                    <div key={index} className="flex text-[#00000099] w-full px-8 py-7 border border-[#d9d9d9] rounded-[20px] flex-col items-start gap-4">
                                        <div className="flex w-full justify-between">
                                            <span className='flex gap-[7px] items-center'>
                                                <Icon icon="ic:round-star" color="#ffc633" />
                                                <Icon icon="ic:round-star" color="#ffc633" />
                                                <Icon icon="ic:round-star" color="#ffc633" />
                                                <Icon icon="ic:round-star" color="#ffc633" />
                                                <Icon icon="ic:round-star" color="#ffc633" />
                                            </span>
                                            <Icon icon="icon-park-outline:more" />
                                        </div>
                                        <div className="flex flex-col gap-2 items-start">
                                            <div className="flex gap-2 items-center">
                                                <p className='font-bold text-black text-xl'>Samantha</p>
                                                <Icon icon="ic:round-verified" color="#279f51" />
                                            </div>
                                            <p className='w-[95%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum facilisis risus eu vulputate. Sed consectetur tristique diam a posuere. Donec aliquam interdum sollicitudin. Integer porttitor massa sapien, tincidunt</p>
                                        </div>
                                        <div className="flex">
                                            <p className='font-medium'>Posted on August 14, 2023</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default StoreFront