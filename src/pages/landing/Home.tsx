import React from "react";
import Header from "../../components/General/Home/Header";
import NavBar from "../../components/General/Home/NavBar";
// import CategorySlider from '../../components/General/Home/CategorySlider'
import Hero from "../../components/General/Home/Hero";
import ProductGroupCard from "../../components/General/Home/ProductGroupCard";
import ProductGroupGrid from "../../components/General/Home/ProductGroupGrid";
import ProductGroup from "../../components/General/Home/ProductGroup";
import AdBanner from "../../assets/Rectangle 4275 (1).png";
import Img from "../../assets/image 102.png";
import { Icon } from "@iconify/react";
import Footer from "../../components/General/Home/Footer";
import PsImg from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import SpecialGroup from "../../components/General/Home/SpecialGroup";
import CategorySlider from "../../components/General/Home/CategorySlider";
import CountryCard from "../../components/General/Home/CountryCard";
import usa from "../../assets/usa.png";
import nigeria from "../../assets/nigeria.png";
import kenya from "../../assets/kenya.png";
import canada from "../../assets/canada.png";
import uk from "../../assets/uk.png";
import denmark from "../../assets/denmark.png";
import southAfrica from "../../assets/south africa.png";
import ghana from "../../assets/ghana.png";
import MobileHeader from "../../components/General/MobileHeader";
import BBBLogo from "../../assets/Group.png";
import Banner from "../../assets/VERTICAL (1).gif";
import { BestSellingProduct, BestSellers, mostLoveFashion } from "./resource";
import { Link } from "react-router-dom";

const Home = () => {
  const gradientStyle = {
    backgroundImage:
      "linear-gradient(94.99deg, #000000 7.19%, rgba(255, 0, 0, 0.5) 89.49%)",
  };
  const Countries = [
    {
      logo: usa,
      name: "Usa",
    },
    {
      logo: nigeria,
      name: "Nigeria",
    },
    {
      logo: kenya,
      name: "Kenya",
    },
    {
      logo: canada,
      name: "Canada",
    },
    {
      logo: uk,
      name: "Uk",
    },
    {
      logo: denmark,
      name: "Denmark",
    },
    {
      logo: southAfrica,
      name: "South Africa",
    },
    {
      logo: ghana,
      name: "Ghana",
    },
  ];

  return (
    <div className="bg-[#eeeeee]">
      <Header />
      <NavBar />
      <MobileHeader />
      <div className="flex flex-wrap gap-4 items-center justify-center py-[14px] px-4 md:px-7 w-full">
        {Countries.map((country: any, index: number) => (
          <CountryCard logo={country.logo} name={country.name} />
        ))}

        <div className="flex items-center bg-white shadow-md rounded-[10px] gap-2 px-3 py-[6px]">
          <span className="text-sm font-medium">More</span>
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
        <ProductGroupCard
          products={BestSellingProduct}
          title={"Bestselling Products"}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid products={BestSellers} title={"Bestsellers "} />
        <ProductGroupGrid
          products={mostLoveFashion}
          title={"Customers’ Most-Loved Fashion for you"}
        />
        <ProductGroupGrid
          products={BestSellers}
          title={"Under $99 | Pocket-friendly fashion"}
        />
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <ProductGroupCard
          products={BestSellingProduct}
          title={"Todays Deals"}
        />
      </div>
      <div className="flex gap-6  justify-center items-center flex-col md:flex-row py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid products={BestSellers} title={"Today Deal "} />
        <ProductGroupGrid
          products={mostLoveFashion}
          title={"Shop deaps in Fashion"}
        />
        <div className="flex h-[514px] w-full  overflow-hidden rounded-[20px]">
          <img className="object-cover w-full h-full" src={Banner} alt="" />
        </div>
      </div>
      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <ProductGroup products={BestSellingProduct.slice(0, 8)} />
      </div>

      <div className="flex py-[14px] px-4 md:px-7 w-full">
        <div className="flex w-full relative rounded-[20px] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={AdBanner}
            alt="ad banner"
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-8 py-6 md:flex-row px-7">
        <div className="flex w-full relative text-white overflow-hidden  item-center justify-between pt-4 pr-14 bg-black rounded-[20px] px-8">
          <div className="flex z-10 flex-col md:h-full h-[360px] w-full  md:w-1/3 gap-4 justify-center items-start">
            <h2 className="text-2xl font-semibold">Play Station 5</h2>
            <p className="font-normal">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="font-medium underline bg-transparent">
              Shop Now
            </button>
          </div>
          <img
            className="absolute bottom-0 md:relative"
            src={PsImg}
            alt="ps5"
          />
        </div>
        <div className="flex w-full md:w-1/2">
          <SpecialGroup products={BestSellingProduct} title={"Specials"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 py-[14px] px-4 md:px-7 w-full">
        <ProductGroupGrid
          products={mostLoveFashion.slice(0, 4)}
          title={"Gifts for everyone"}
        />
        <ProductGroupGrid
          products={BestSellers.slice(0, 4)}
          title={"Gift by Recipient"}
        />
        <ProductGroupGrid
          products={mostLoveFashion.slice(0, 4)}
          title={"Top gift"}
        />
      </div>

      <div className="relative flex w-full overflow-hidden">
        <div
          style={gradientStyle}
          className="absolute top-0 z-10 w-full h-full"
        ></div>
        <img
          className="absolute object-cover w-full h-full"
          src={Img}
          alt="who we are bg"
        />
        <div className="z-20 flex flex-col gap-6 px-16 text-white md:flex-row py-28">
          <div className="flex flex-col items-start w-full gap-4">
            <h1 className="text-3xl font-bold">Who We Are</h1>
            <p className="text-xl">
              Amazon is guided by four principles: customer obsession rather
              than competitor focus, passion for invention, commitment to
              operational excellence, and long-term thinking. Amazon strives to
              be Earth’s most customer-centric company, Earth’s best employer,
              and Earth’s safest place to work.
            </p>
            <Link to="/about" className="text-sm px-6 font-bold bg-white rounded-sm py-3 text-[#DB4444]">
              See more
            </Link>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon icon="mdi:cart-outline" color="#c68c57" width="28" />
              </span>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Leadership</h2>
                <p className="w-full md:w-2/3">
                  Our Leadership Principles are more than inspirational wall
                  hangings.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <span className="p-4 rounded-[20px] bg-white">
                <Icon
                  rotate={45}
                  icon="icon-park-twotone:tape-measure"
                  color="#3734a9"
                  width="24"
                />
              </span>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">Leadership</h2>
                <p className="w-full md:w-2/3">
                  Our Leadership Principles are more than inspirational wall
                  hangings.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <a
                href="https://www.bbb.org/us/ga/fayetteville/profile/online-shopping/azany-0443-91827400/#sealclick"
                className="p-2 rounded-[20px] bg-white"
              >
                <div className="grid w-10 h-10 place-items-center">
                  <img className="object-cover" src={BBBLogo} alt="" />
                </div>
              </a>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">BBB Accredited</h2>
                <p className="w-full md:w-2/3">
                  Our Leadership Principles are more than inspirational wall
                  hangings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
