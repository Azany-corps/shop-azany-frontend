import React from "react";

import TopHeader from "../../components/General/TopHeader";
import BottomHeader from "../../components/General/BottomHeader";
import MobileHeader from "../../components/General/MobileHeader";
import Footer from "../../components/General/Footer";
import MobileFooter from "../../components/General/MobileFooter";
import Trending from "../../components/General/landing/Trending";

type Props = {};

export default function RefundPolicy({}: Props) {
  return (
    <div className="w-full overflow-x-hidden bg-[#F5F5F5]">
      <div className=" flex flex-col min-h-screen">
        <div className="headers mb-6">
          <TopHeader />
          <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
          <MobileHeader />
        </div>
        {/* Page Content */}
        <div className="flex flex-col gap-4">
          <div className="banner w-full flex-col smm:flex-row bg-[#1B7CFC] flex justify-between items-center pt-6 px-[5%]">
            <div className="flex flex-col smm:text-left text-center gap-3 text-white">
              <h1 className="lgm:text-5xl text-3xl font-bold">
                Refunds & Returns
              </h1>
              <p className="text-base font-medium">
                {" "}
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <img src="/images/refund_banner.svg" alt="banner-image" />
          </div>
          <div className="warehouse w-[90%] mb-5 mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-2xl px-6 py-3 border-b border-b-gray-300 ">
              Refund Policy
            </h1>
            <div className="mdm:flex-row flex-col-reverse flex gap-4  py-10 px-6">
              <div className="flex-1">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem
                  ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
                  consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
                  dolor sit amet consectetur.Lorem ipsum dolor sit amet
                  consectetur.Lorem ipsum dolor sit amet consectetur.
                  <ul className="list-disc list-inside">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor
                      sit amet consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                      sit amet consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
                      sit amet consectetur.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur.Lorem ipsum
                      consectetur.
                    </li>
                  </ul>
                  dolor sit amet consectetur.Lorem ipsum dolor sit amet
                  consectetur.Lorem ipsum dolor sit amet consectetur. Lorem
                  ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                  consectetur .Lorem ipsum dolor sit amet consectetur.Lorem
                  ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
                  consectetur.
                </p>
              </div>
              <iframe
                height={"400px"}
                className="flex-1"
                src="https://www.youtube.com/embed/vSIV5K-uGHM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="warehouse w-[90%] mb-5 mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-2xl px-6 py-3 border-b border-b-gray-300 ">
            Refund Policy
          </h1>
          <p className="py-10 px-6">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
            sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem
            ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
            sit amet consectetur.
            <ul className="list-disc list-inside">
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                amet consectetur.
              </li>
            </ul>
            dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
            .Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
            sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem
            ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.Lorem ipsum dolor sit am consectetur.Lorem ipsum dolor
            sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <Trending
          styles={"bg-white font-medium text-lg text-black "}
          title={"Trending Categories"}
        />
        <div className="footer">
          <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
          <MobileFooter
            style={
              "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
            }
          />
        </div>
      </div>
    </div>
  );
}
