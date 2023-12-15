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
import CountryCard from '../../components/General/Home/CountryCard'
import usa from '../../assets/usa.png'
import nigeria from '../../assets/nigeria.png'
import kenya from '../../assets/kenya.png'
import canada from '../../assets/canada.png'
import uk from '../../assets/uk.png'
import denmark from '../../assets/denmark.png'
import southAfrica from '../../assets/south africa.png'
import ghana from '../../assets/ghana.png'
import MobileHeader from "../../components/General/MobileHeader";
import BBBLogo from '../../assets/Group.png'
import Img1 from '../../assets/image1.jpg'
import Img2 from '../../assets/image2.jpg'
import Img3 from '../../assets/image3.jpg'
import Img4 from '../../assets/image4.jpg'
import Img5 from '../../assets/image5.jpg'
import Img6 from '../../assets/image6.jpg'
import Img7 from '../../assets/image7.jpg'
import Img8 from '../../assets/image8.jpg'
import Img9 from '../../assets/image9.jpg'
import Img10 from '../../assets/image10.jpg'
import Img11 from '../../assets/image11.jpg'
import Img12 from '../../assets/image12.jpg'
import Img13 from '../../assets/image3.jpg'

const Home = () => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(94.99deg, #000000 7.19%, rgba(255, 0, 0, 0.5) 89.49%)',
  };
  const Countries = [
    {
      logo: usa,
      name: 'Usa'
    },
    {
      logo: nigeria,
      name: 'Nigeria'
    },
    {
      logo: kenya,
      name: 'Kenya'
    },
    {
      logo: canada,
      name: 'Canada'
    },
    {
      logo: uk,
      name: 'Uk'
    },
    {
      logo: denmark,
      name: 'Denmark'
    },
    {
      logo: southAfrica,
      name: 'South Africa'
    },
    {
      logo: ghana,
      name: 'Ghana'
    },
  ]

  const products = [
    {
      img: Img1
    },
    {
      img: Img2
    },
    {
      img: Img11
    },
    {
      img: Img3
    },
    {
      img: Img4
    },
    {
      img: Img5
    },
    {
      img: Img6
    },
    {
      img: Img7
    },
    {
      img: Img8
    },
    {
      img: Img9
    },
    {
      img: Img9
    },
    {
      img: Img10
    },
    {
      img: Img11
    },
    {
      img: Img12
    },
    {
      img: Img13
    },
  ]


  return (
    <div className='bg-[#eeeeee]'>
      <Header />
      <NavBar />
      <MobileHeader />
      <div className="flex flex-wrap gap-4 items-center justify-center py-[14px] px-4 md:px-7 w-full">
        {
          Countries.map((country: any, index: number) => (
            <CountryCard logo={country.logo} name={country.name} />
          ))
        }

        <div className='flex items-center bg-white shadow-md rounded-[10px] gap-2 px-3 py-[6px]'>
          <span className='text-sm font-medium'>More</span>
          <Icon icon="uiw:down" width={20} />
        </div>
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <Hero />
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <CategorySlider />
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <ProductGroupFlex products={products} title={"Bestselling Products"} />
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid products={products.slice(0, 4)} title={"Bestsellers "} />
        <ProductGroupGrid products={products.slice(0, 4)} title={"Customers’ Most-Loved Fashion for you"} />
        <ProductGroupGrid products={products.slice(0, 4)} title={"Under $99 | Pocket-friendly fashion"} />
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <ProductGroupFlex products={products} title={"Todays Deals"} />
      </div>
      <div className="flex gap-6 flex-col md:flex-row py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid products={products.slice(0, 4)} title={"Today Deal "} />
        <ProductGroupGrid products={products.slice(0, 4)} title={"Shop deaps in Fashion"} />
        <div className="flex h-full w-full bg-green-700 rounded-[20px]">
        </div>
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <ProductGroup products={products.slice(0, 8)} />
      </div>

      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <div className="flex w-full relative rounded-[20px] overflow-hidden">
          <img className='h-full w-full object-cover' src={AdBanner} alt="ad banner" />
          <span className="bg-[#0056FF] rounded-sm px-2 py-1 text-white absolute bottom-4 left-4 md:bottom-24 md:left-24 text-xs">Ads Banner 2</span>
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row gap-8 px-7 py-6">
        <div className="flex w-full relative text-white overflow-hidden  item-center justify-between pt-4 pr-14 bg-black rounded-[20px] px-8">
          <div className="flex z-10 flex-col md:h-full h-[360px] w-full  md:w-1/3 gap-4 justify-center items-start">
            <h2 className='font-semibold text-2xl'>Play Station 5</h2>
            <p className="font-normal">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline bg-transparent font-medium">Shop Now</button>
          </div>
          <img className='absolute bottom-0 md:relative' src={PsImg} alt="ps5" />
        </div>
        <div className="flex w-full md:w-1/2">
          <SpecialGroup products={products} title={'Specials'} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid products={products.slice(0, 4)} title={"Gifts for everyone"} />
        <ProductGroupGrid products={products.slice(0, 4)} title={"Gift by Recipient"} />
        <ProductGroupGrid products={products.slice(0, 4)} title={"Top gift"} />
      </div>

      <div className="flex relative overflow-hidden w-full">
        <div style={gradientStyle} className="absolute z-10 h-full w-full top-0"></div>
        <img className='absolute w-full h-full object-cover' src={Img} alt="who we are bg" />
        <div className="flex flex-col md:flex-row gap-6 text-white z-20 py-28 px-16">
          <div className="flex w-full flex-col gap-4 items-start">
            <h1 className='text-3xl font-bold'>Who We Are</h1>
            <p className='text-xl'>Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s most customer-centric company, Earth’s best employer, and Earth’s safest place to work.</p>
            <button className='text-xs px-3 bg-white rounded-sm py-1 text-[#DB4444]'>See more</button>
          </div>
          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon icon="mdi:cart-outline" color="#c68c57" width="28" />
              </span>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Leadership</h2>
                <p className='w-full md:w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon rotate={45} icon="icon-park-twotone:tape-measure" color="#3734a9" width="24" />
              </span>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>Leadership</h2>
                <p className='w-full md:w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href='https://www.bbb.org/us/ga/fayetteville/profile/online-shopping/azany-0443-91827400/#sealclick'
                className="p-2 rounded-[20px] bg-white"
              >
                <div className="w-10 grid place-items-center h-10">
                  <img className='object-cover' src={BBBLogo} alt="" />
                </div>
              </a>
              <div className="flex flex-col">
                <h2 className='text-2xl font-bold'>BBB Accredited</h2>
                <p className='w-full md:w-2/3'>Our Leadership Principles are more than inspirational wall hangings.</p>
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
