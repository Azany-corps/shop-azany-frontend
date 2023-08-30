import { useEffect, useState } from "react";
import FlagComponent, { Option } from "../../Core/FlagComponent";
import axios from "axios";
import React, { ChangeEvent } from "react";
import Carousel from "../../Core/Carousel";

interface HeroProps {
  onCountryChange: (country: string, longitude: number, latitude: number) => void;
}

const Hero = ({ onCountryChange }: HeroProps) => {
  const [, setIpAddress] = useState("");
  const [, setCountry] = useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [longitude, setLongitude] = useState<number | undefined>();
  const [latitude, setLatitude] = useState<number | undefined>();
  const [options, setOptions] = useState<Option[]>([]);

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
        onCountryChange(country, longitude || 0, latitude || 0);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [onCountryChange, longitude, latitude]);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedValue(selectedCountry);
    const selectedOption = options.find((option) => option.value === selectedCountry);
    const { longitude, latitude } = selectedOption || {};
    setLongitude(longitude);
    setLatitude(latitude);
    onCountryChange(selectedCountry, longitude || 0, latitude || 0);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedValue(option.value);
    setLongitude(option.longitude || 0);
    setLatitude(option.latitude || 0);
    onCountryChange(option.value, option.longitude || 0, option.latitude || 0);
  };

  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near`;

  return (
    <div className="w-full flex flex-row py-4 px-14 gap-10 bg-white xs:hidden">
      <div className="w-2/3">
        <Carousel />
      </div>
      <div className="w-2/3">
        <div className="">
          <iframe title="frameborder" src={mapUrl} aria-label="Location" className="w-full h-3/4"></iframe>
        </div>
        <div>
          <h1 className="text-2xl font-medium">Where would you like to shop from?</h1>
          <h1 className="font-normal">You get access to exclusive deals across the globe</h1>
        </div>
        <div>
          <FlagComponent
            placeholder="Select your country"
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            onChange={handleCountryChange}
            onOptionSelect={handleOptionSelect}
            options={options}
            styles="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
