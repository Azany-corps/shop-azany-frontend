/* eslint-disable react/style-prop-object */
import React from "react";
import ReturnTop from "../../components/CustomerProfile/ReturnTop";
import BannerSOA from "../../components/General/sell-on-azany/BannerSOA";
import CountSOA from "../../components/General/sell-on-azany/CountSOA";
import ContainerSOA from "../../components/General/sell-on-azany/ContainerSOA";
import SubscriptionSOA from "../../components/General/sell-on-azany/SubscriptionSOA";
import TestimonialSOA from "../../components/General/sell-on-azany/TestimonialSOA";
import Footer from "../../components/General/Footer";
import MobileFooter from "../../components/General/MobileFooter";

const AzanyFarmers = () => {
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden gap-6">
      <ReturnTop />
      <BannerSOA />
      <CountSOA />
      <ContainerSOA />
      <SubscriptionSOA />
      <TestimonialSOA />
      <Footer style={"bg-[#132A13] py-10 px-10 smm:block hidden w-[90%] mx-auto rounded-md mb-10"} />
      <MobileFooter isFarmer={true} style={"bg-[#132A13] block  smm:hidden "} />
    </div>
  );
};

export default AzanyFarmers;
