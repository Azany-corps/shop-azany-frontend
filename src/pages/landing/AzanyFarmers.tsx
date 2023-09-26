import React from "react";
import ReturnTop from "../../components/CustomerProfile/ReturnTop";
import BannerSOA from "../../components/General/sell-on-azany/BannerSOA";
import CountSOA from "../../components/General/sell-on-azany/CountSOA";
import ContainerSOA from "../../components/General/sell-on-azany/ContainerSOA";
import SubscriptionSOA from "../../components/General/sell-on-azany/SubscriptionSOA";

const AzanyFarmers = () => {
  return (
    <div className="bg-[#F5F5F5] overflow-x-hidden gap-6">
      <ReturnTop />
      <BannerSOA />
      <CountSOA />
      <ContainerSOA />
      <SubscriptionSOA />
    </div>
  );
};

export default AzanyFarmers;
