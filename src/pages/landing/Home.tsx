import React, { ReactElement, useEffect, useRef, useState } from "react";
import Advert from "../../components/General/landing/Advert";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import Categories from "../../components/General/landing/Categories";
import Categoriess from "../../components/General/landing/Categoriess";
import Hero from "../../components/General/landing/Hero";
import Trending from "../../components/General/landing/Trending";
import TopHeader from "../../components/General/TopHeader";
import Slider from "../../components/General/landing/Slider";
import MobileHeader from "../../components/General/MobileHeader";
import MobileHero from "../../components/General/landing/MobileHero";
import MobileFooter from "../../components/General/MobileFooter";
import ExclusiveCategories from "../../components/General/landing/ExclusiveCategories";
import Carousel from "../../components/Core/Carousel";
import { countries } from "../../newCountries";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import axios from "axios";
import { count } from "console";

import Newsletter from "../../components/General/landing/Newsletter";

function MyMapComponent({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null); // Initialize the ref properly

  useEffect(() => {
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
    }
  }, [center, zoom]);

  return <div ref={ref} className="flex flex-1" id="map" />;
}

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState<any>();
  const [country, setCountry] = useState<any>("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const handleCountryChange = (country: string) => {};
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 11;
  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response: any) => {
        const ipAddress = response.data.ip;

        console.log(`This is the user ip address ${ipAddress}`);
        return axios.get(
          `https://api.ipdata.co/${ipAddress}?api-key=c2624240ad5530e7b85c0e7481069f72b4fc9a4e542466e7580a5c27`
        );
      })
      .then((response: any) => {
        const country = response.data.country_name;
        setCountry(country);
        setLatitude(response.data.latitude);
        setLongitude(response.data.longitude);
        console.log(`User is located in ${country}.`);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setSelectedCountry(
      countries.find((newcountry) => newcountry.name === country)
    );
  }, [country]);

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near`;

  const render = (status: Status): ReactElement => {
    if (status === Status.FAILURE) return <p>error</p>;
    return <p>loading</p>;
  };
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      {/*<TopHeader />*/}
      <BottomHeader style={"bg-[#221E22] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#44444C] xs:hidden"} />
      {/* <Slider /> */}
      {/* <Hero onCountryChange={handleCountryChange} /> */}
      <MobileHero onCountryChange={handleCountryChange} />
      <div className=" home-background w-full flex py-4 px-14 xs:hidden">
        <div className="w-full">
          <Carousel />
        </div>
        {/*<div className="w-2/3 flex flex-col gap-1">
          <div className="flex-1 flex flex-col">
            <Wrapper
              apiKey={"AIzaSyCD1FuJyVYo8fzxw9xxX7NTexAYviVGv0U"}
              render={render}
            >
              <MyMapComponent center={{lat:Number(latitude), lng:Number(longitude)}} zoom={zoom} />
            </Wrapper>
          </div>
          <div>
            <h1 className="text-2xl font-medium">
              Where would you like to shop from?
            </h1>
            <h1 className="font-normal">
              You get access to exclusive deals across the globe
            </h1>
          </div>
          <div>
            {/* <FlagComponent
            placeholder="Select your country"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            onChange={handleCountryChange}
            onOptionSelect={handleOptionSelect}
            options={options}
            styles="rounded-md"
          /> 
            <select
              name="flag"
              id="flag"
              defaultValue={
                countries.find((countryy) => countryy.name === country)?.name
              }
              onChange={(e) => setCountry(e.target.value)}
              className={`block appearance-none w-full bg-white border border-gray-400 h-[48px] hover:border-gray-500 px-4 py-3 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline`}
            >
              <option>
                {selectedCountry
                  ? selectedCountry?.emoji + " " + selectedCountry?.name
                  : ""}
              </option>
              {countries &&
                countries.map((country) => (
                  <option value={country.name}>
                    <span>{country.emoji + " " + country.name}</span>
                  </option>
                ))}
            </select>
          </div>
        </div>*/}
      </div>
      <Wrapper
        apiKey={"AIzaSyCD1FuJyVYo8fzxw9xxX7NTexAYviVGv0U"}
        render={render}
      >
        <MyMapComponent
          center={{ lat: Number(latitude), lng: Number(longitude) }}
          zoom={11}
        />
      </Wrapper>
      <Categories
        styles={"bg-red-600 font-medium text-lg text-white "}
        title={"Newly Posted"}
        country={country}
      />
      <Categoriess
        styles={"bg-blue-400 font-medium text-lg text-white "}
        title={"Top Sellers"}
        country={country}
      />
      <Categoriess
        styles={"bg-blue-600 font-medium text-lg text-white"}
        title={"Top Products"}
        country={country}
      />
      <Advert src={"/images/azanyad1.png"} />
      <Categoriess
        styles={"bg-white font-medium text-lg text-black"}
        title={"Chuks Enterprise"}
        country={country}
      />
      <ExclusiveCategories
        styles={"bg-white font-medium text-lg text-black "}
        title={"Exclusive Deals"}
        country={country}
      />
      <Advert src={"/images/azanyad2.png"} />
      <Trending
        styles={"bg-white font-medium text-lg text-black "}
        title={"Trending Categories"}
      />
      <ExclusiveCategories
        styles={"bg-white font-medium text-lg text-black "}
        title={"Exclusive Deals"}
        country={country}
      />
      <Newsletter style={"bg-[#70ADFF] py-5 px-10 xs:hidden"} />
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default Home;
