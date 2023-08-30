import React, { useEffect, useState } from "react";
import Category from "../../components/General/categories/Category";
import FCategory from "../../components/General/farmers/Category";
import Footer from "../../components/General/Footer";
import ReturnTop from "../../components/CustomerProfile/ReturnTop";
import { Link } from "react-router-dom";
import FlagComponent from "../../components/Core/FlagComponent";
import axios from "axios";
import MobileFooter from "../../components/General/MobileFooter";

const Farmers = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        const ipAddress = response.data.ip;
        setIpAddress(ipAddress);
        return axios.get(`https://api.ipdata.co/${ipAddress}?api-key=c2624240ad5530e7b85c0e7481069f72b4fc9a4e542466e7580a5c27`);
      })
      .then((response) => {
        const country = response.data.country_name;
        setSelectedValue(country);
        console.log(`User is located in ${country}.`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setSelectedValue(selectedCountry);
    console.log(selectedCountry);
  };
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden">
      <ReturnTop />
      <div className="flex smm:flex-row  flex-col">
        <div className="mdm:w-[250px]  lgm:w-[320px] smm:w-[220px] smm:block flex ">
          <FCategory />
        </div>
        <div className="flex flex-col lgm:w-[calc(100vw-320px)] mdm:w-[calc(100vw-250px)] smm:w-[calc(100vw-220px)] w-full">
          <div
            className="banner h-[313px] bg-cover bg-no-repeat flex flex-col gap-6 justify-center items-center"
            style={{ backgroundImage: "url(/images/farmersbanner.png)" }}
          >
            <p className="text-white text-center mdm:text-5xl smm:text-4xl text-2xl text- font-bold">Discover Agriculture</p>
            <div className="w-3/5">
              <FlagComponent
                placeholder="Select your country"
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                onChange={handleCountryChange}
                styles="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col  gap-4 bg-white">
            <div className="bg-[#ECF39E] px-8 xs:px-4 py-4 font-medium xs:text-sm text-lg">
              <p className="text-[#132A13]">Top Exports</p>
            </div>
            <div className="flex overflow-x-scroll">
              <div className="flex flex-row gap-4 mb-1 bg-white">
                <div className="flex flex-col  gap-1 cursor-pointer w-[200px] px-1 ">
                  <Link to="/farmers/sellers/">
                    <img
                      src="/images/tomatoes.png"
                      alt="rice"
                      // className="w-[200px] h-[200px]"
                    />
                    <p className="font-medium">Rice</p>
                    <p>13 Tons</p>
                  </Link>
                </div>
                <div className="flex flex-col w-[200px]  px-1 gap-1">
                  <Link to="/farmers/sellers/">
                    <img
                      src="/images/rice.png"
                      alt="rice"
                      // className="w-[200px] h-[200px]"
                    />
                    <p className="font-medium">Rice</p>
                    <p>13 Tons</p>
                  </Link>
                </div>
                <div className="flex flex-col w-[200px]  px-1 gap-1">
                  <Link to="/farmers/sellers/">
                    <img
                      src="/images/rice.png"
                      alt="rice"
                      // className="w-[200px] h-[200px]"
                    />
                    <p className="font-medium">Rice</p>
                    <p>13 Tons</p>
                  </Link>
                </div>
                <div className="flex flex-col w-[200px]  gap-1">
                  <img
                    src="/images/tomatoes.png"
                    alt="rice"
                    // className="w-[200px] h-[200px]"
                  />
                  <p className="font-medium">Rice</p>
                  <p>13 Tons</p>
                </div>
                <div className="flex flex-col w-[200px]  gap-1">
                  <img
                    src="/images/rice.png"
                    alt="rice"
                    // className="w-[200px] h-[200px]"
                  />
                  <p className="font-medium">Rice</p>
                  <p>13 Tons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4">
          <Category styles={"text-[#132A13] bg-[#ECF39E] font-medium xs:text-sm text-lg"} title={"Newly Uploaded Farm Products"} country={selectedValue} />
      </div>

      <div className="flex flex-col mx-auto lgm:w-[90%] mdm:w-[95%] w-[97%] mdm:mt-10 mt-5 smm:flex-row">
        <div className="smm:w-1/2 rounded-t-lg w-full relative">
          <img src="/images/farmersfilter.png" alt="filter" className="h-full rounded-t-lg" />
          <p className="text-white text-center text-4xl smm:text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Agro-Search
          </p>
        </div>

        <div className="flex flex-col  smm:p-8 p-4 amm:gap-6 gap-3 bg-white smm:w-1/2 w-full">
          <p className="font-medium text-[20px]">What product are you looking for?</p>
          <div className="w-full flex flex-col relative items-start gap-1">
            <label className="font-normal text-[14px] text-[#515151]">PRODUCT CATEGORY</label>
            <input placeholder="Select product category" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>
          <div className="w-full flex flex-col relative items-start gap-1">
            <label className="font-normal text-[14px] text-[#515151]">PRODUCT NAME</label>
            <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>
          <div className="w-full flex flex-col relative items-start gap-1">
            <label className="font-normal text-[14px] text-[#515151]">SHIP TO</label>
            <input placeholder="Input country here" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
          </div>
          <button className="bg-[#E51B48] w-full p-2 rounded-md text-white">Search Product</button>
        </div>
      </div>
      <div className="lgm:w-[90%] mdm:w-[95%] w-97 mx-auto lgm:mt-10 mt-5">
        <img src="/images/nutsbanner.png" alt="banner" />
      </div>

      <div className="mx-4">
        <Category styles={"text-[#132A13] bg-[#ECF39E] font-medium xs:text-sm text-lg"} title={"Top Agro Exporters"} country={selectedValue} />
        <Category styles={"text-[#132A13] bg-[#ECF39E] font-medium xs:text-sm text-lg"} title={"Vegetables"} country={selectedValue} />
      </div>
      <div className="w-[91%] mx-auto my-10">
        <img src="/images/farmersbannner.png" alt="banner" />
      </div>

      <Footer style={"bg-[#132A13] py-10 px-10 smm:block hidden"} />
      <MobileFooter isFarmer={true} style={"bg-[#132A13] block  smm:hidden "} />
    </div>
  );
};

export default Farmers;
