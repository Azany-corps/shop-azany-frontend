import React, { useEffect, useState } from "react";
import FlagComponent from "../../Core/FlagComponent";
import Carousel from "../../Core/Carousel";
import axios from "axios";

interface HeroProps {
  onCountryChange: (country: string) => void;
}

const MobileHero = ({ onCountryChange }: HeroProps) => {
  const [, setIpAddress] = useState("");
  const [, setCountry] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setIpAddress(ipAddress);
        console.log(`This is the user ip address ${ipAddress}`);
        return axios.get(`https://api.ipdata.co/${ipAddress}?api-key=c2624240ad5530e7b85c0e7481069f72b4fc9a4e542466e7580a5c27`);
      })
      .then((response) => {
        const country = response.data.country_name;
        setCountry(country);
        setSelectedValue(country);
        console.log(`User is located in ${country}.`);
        onCountryChange(country);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [onCountryChange]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedValue(selectedCountry);
    onCountryChange(selectedCountry);
  };
  return (
    <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
      <div className="w-full">
        <Carousel />
      </div>
      {/*<div className="relative p-6 rounded-lg flex flex-col bg-white mx-4 gap-4 -mt-6 z-2">
        <div>
          <h1 className="text-lg font-medium">Where would you like to shop?</h1>
          <h1 className="font-normal">You get access to exclusive deals across the globe</h1>
        </div>
        <div>
          <FlagComponent
            placeholder="Select your country"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            onChange={handleCountryChange}
            styles="rounded-md"
          />
        </div>
    </div>*/}
    </div>
  );
};

export default MobileHero;
