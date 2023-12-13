import React from 'react'
import Header from '../../components/General/Home/Header'
import NavBar from '../../components/General/Home/NavBar'
// import CategorySlider from '../../components/General/Home/CategorySlider'
import Hero from '../../components/General/Home/Hero'
import ProductGroupFlex from '../../components/General/Home/ProductGroupFlex'
import ProductGroupGrid from '../../components/General/Home/ProductGroupGrid'
import ProductGroup from '../../components/General/Home/ProductGroup'
import AdBanner from '../../assets/Rectangle 4275 (1).png'
import Img from '../../assets/image 102.png'
import { Icon } from '@iconify/react';
import Footer from '../../components/General/Home/Footer'
import PsImg from '../../assets/ps5-slim-goedkope-playstation_large 1.png'
import SpecialGroup from '../../components/General/Home/SpecialGroup'
import CategorySlider from '../../components/General/Home/CategorySlider'

const Home = () => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(94.99deg, #000000 7.19%, rgba(255, 0, 0, 0.5) 89.49%)',
  };
  return (
    <div className='bg-[#eeeeee]'>
      <Header />
      <NavBar />
      <div className="flex py-[14px] px-7 w-full">
        <Hero />
      </div>
      <div className="flex py-[14px] px-7 w-full">
        <Hero />
      </div>
      <div className="flex py-[14px] px-7 w-full">
        <CategorySlider />
      </div>
      <div className="flex py-[14px] px-7 w-full">
        <ProductGroupFlex title={"Bestselling Products"} />
      </div>
      <div className="flex gap-6 py-[14px] px-7 w-full">
        <ProductGroupGrid title={"Bestsellers "} />
        <ProductGroupGrid title={"Customers’ Most-Loved Fashion for you"} />
        <ProductGroupGrid title={"Under $99 | Pocket-friendly fashion"} />
      </div>
      <div className="flex py-[14px] px-7 w-full">
        <ProductGroupFlex title={"Todays Deals"} />
      </div>
      <div className="flex gap-6 py-[14px] px-7 w-full">
        <ProductGroupGrid title={"Today Deal "} />
        <ProductGroupGrid title={"Shop deaps in Fashion"} />
        <div className="flex h-full w-full bg-green-700 rounded-[20px]">
        </div>
      </div>
      <div className="flex py-[14px] px-7 w-full">
        <ProductGroup />
      </div>

      <div className="flex py-[14px] px-7 w-full">
        <div className="flex w-full relative rounded-[20px] overflow-hidden">
          <img className='h-full w-full object-cover' src={AdBanner} alt="ad banner" />
          <span className="bg-[#0056FF] rounded-sm px-2 py-1 text-white absolute bottom-24 left-24 text-xs">Ads Banner 2</span>
        </div>
      </div>

      <div className="flex w-full gap-8 px-7 py-6">
        <div className="flex w-full text-white item-center justify-between pt-4 pr-14 bg-black rounded-[20px] px-8">
          <div className="flex flex-col h-full w-1/3 gap-4 justify-center items-start">
            <h2 className='font-semibold text-2xl'>Play Station 5</h2>
            <p className="font-normal">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline bg-transparent font-medium">Shop Now</button>
          </div>
          <img src={PsImg} alt="ps5" />
        </div>
        <div className="flex w-1/2">
          <SpecialGroup title={'Specials'} />
        </div>
      </div>

      <div className="flex gap-6 py-[14px] px-7 w-full">
        <ProductGroupGrid title={"Gifts for everyone"} />
        <ProductGroupGrid title={"Gift by Recipient"} />
        <ProductGroupGrid title={"Top gift"} />
      </div>

      <div className="flex relative overflow-hidden w-full">
        <div style={gradientStyle} className="absolute z-10 h-full w-full top-0"></div>
        <img className='absolute w-full h-full object-cover' src={Img} alt="who we are bg" />
        <div className="flex gap-6 text-white z-20 py-28 px-16">
          <div className="flex w-full flex-col gap-4 items-start">
            <h1 className='text-3xl font-bold'>Who We Are</h1>
            <p className='text-xl'>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work.</p>
            <button className='text-xs px-3 bg-white rounded-sm py-1 text-[#DB4444]'>See more</button>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex justify-center items-center gap-6">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon icon="mdi:cart-outline" color="#c68c57" width="28" />
              </span>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Leadership</h2>
                <p className='w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon rotate={45} icon="icon-park-twotone:tape-measure" color="#3734a9" width="24" />
              </span>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Leadership</h2>
                <p className='w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-6">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon icon="ant-design:shop-twotone" color="rgba(3, 42, 69, 0.14901960784313725)" width="24" />
              </span>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Leadership</h2>
                <p className='w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home