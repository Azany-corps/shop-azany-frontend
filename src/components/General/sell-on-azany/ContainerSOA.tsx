import React from "react";
import image1 from "../../../assets/bannerSOA1.png";
import image2 from "../../../assets/bannerSOA2.png";
import image3 from "../../../assets/bannerSOA3.png";
import { Icon } from "@iconify/react";

const ContainerSOA = () => {
  return (
    <div className="flex w-[90%] mb-6 mx-auto xs:w-full flex-col p-6 gap-10 bg-white rounded-md">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-4xl xs:text-2xl font-bold text-[#132A13]">Why Choose Azany</p>
        <p className="text-xl xs:text-base">Discover the Azany Advantage</p>
      </div>
      <div className="flex xs:flex-col items-center justify-center gap-20 xs:gap-4">
        <div className="rounded-lg shadow-md xs:w-full w-1/4 flex flex-col">
          <div className="w-full">
            <img src={image3} alt="" />
          </div>
          <div className="p-4">
            <p className="text-2xl">Branch Creation</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md xs:w-full w-1/4 flex flex-col">
          <div className="w-full">
            <img src={image2} alt="" />
          </div>
          <div className="p-4">
            <p className="text-2xl">Branch Creation</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
        </div>
        <div className="rounded-lg shadow-md xs:w-full w-1/4 flex flex-col">
          <div className="w-full">
            <img src={image1} alt="" />
          </div>
          <div className="p-4">
            <p className="text-2xl">Branch Creation</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
        </div>
      </div>
      <div className="flex xs:flex-col items-center justify-center gap-10 xs:gap-4 bg-[#0A1F3B] text-white p-6 rounded-md">
        <div className="flex flex-col gap-4 xs:w-full w-1/4">
          <Icon icon="la:shipping-fast" width="40" height="40" />
          <div className="flex-col flex gap-2">
            <p className="text-2xl">Shipping</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:w-full w-1/4">
          <Icon icon="tdesign:chart-line" width="40" height="40" />
          <div className="flex-col flex gap-2">
            <p className="text-2xl">Market Trends</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:w-full w-1/4">
          <Icon icon="cil:badge" width="40" height="40" />
          <div className="flex-col flex gap-2">
            <p className="text-2xl">Your Brand</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 xs:w-full w-1/4">
          <Icon icon="uil:store" width="40" height="40" />
          <div className="flex-col flex gap-2">
            <p className="text-2xl">Dedicated Store Front</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSOA;
