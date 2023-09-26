import React from "react";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import Banner from "../../components/General/manufacturers/Banner";
import Body from "../../components/General/manufacturers/Body";
import Category from "../../components/General/manufacturers/Category";
import TopHeader from "../../components/General/TopHeader";
import MobileHeader from "../../components/General/MobileHeader";
import MobileFooter from "../../components/General/MobileFooter";
import { Link } from "react-router-dom";
import PlansCard from "../../components/General/plans/Card";

const ManufacturerHomePage = () => {
  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader />
      <div className="flex flex-col gap-16">
        <div className="flex items-center justify-between gap-6 py-6 bg-white w-[90%] rounded-2xl mx-auto">
          <div className="right-text w-full mr-2">
            <h1 className="text-[#0A1F3B] text-6xl font-bold mb-4">
              Start selling as a Manufacturer with Azany
            </h1>
            <p className="text-[#0A1F3B] text-xl mb-[40px]">
              Gaining entry to international trade with merchants spread across
              the globe.
            </p>
            <Link to={"/"}>
              <div className="text-[#FFFFFF] bg-[#E51B48] py-3 w-[250px] text-center rounded-lg">
                Get Started
              </div>
            </Link>
          </div>
          <div className="left-img w-full  flex- items-end">
            <img src="/images/malap.svg" className="mx-auto" alt="" />
          </div>
        </div>
        <div className="flex w-[70%] mx-auto ">
          <div className="flex justify-evenly w-full ">
            <div className="flex flex-col gap-3">
              <div className="text-black text-5xl font-medium font-['Inter']">
                500+
              </div>
              <div className="text-black text-base font-normal font-['Inter']">
                Merchants
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-black text-5xl font-medium font-['Inter']">
                500+
              </div>
              <div className="text-black text-base font-normal font-['Inter']">
                Merchants
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-black text-5xl font-medium font-['Inter']">
                500+
              </div>
              <div className="text-black text-base font-normal font-['Inter']">
                Merchants
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-black text-5xl font-medium font-['Inter']">
                500+
              </div>
              <div className="text-black text-base font-normal font-['Inter']">
                Merchants
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] items-center mx-auto justify-between">
          <div className="w-full flex flex-col items-center">
            <p className="text-slate-900 text-5xl font-bold font-['Inter']">
              Why Choose Azany?
            </p>
            <p className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">
              Discover the Azany Advantage!
            </p>
          </div>
        </div>
        <div className="flex w-[90%] items-center mx-auto justify-between">
          <div className="flex-col flex w-[378px] gap-5">
            <div
              className="img w-[378px] h-[325px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/branch-creation.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className="w-80 text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
          <div className="flex-col flex w-[591px] items-center gap-5">
            <div
              className="img w-[591px] h-[377px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/logistics.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className="text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.
              Lorem ipsum dolor sit amet consec. Lorem ipsum
              dolorconsectetur.Lore ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit
            </p>
          </div>
          <div className="flex-col flex w-[378px] items-center gap-5">
            <div
              className="img w-[378px] h-[325px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/shipping.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className="w-80 text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
        </div>
        <div className="flex w-[90%] items-center mx-auto justify-between">
          <div className="w-full flex-1 pl-16 pr-14 py-9 bg-slate-900 rounded-2xl justify-end items-end gap-12 inline-flex">
            <div className="flex  flex-col gap-4 relative">
              <img src="/images/la_shipping-fast.svg" alt="" width={40} />
              <div className="w-16 border-2 border-white"></div>
              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex  flex-col gap-4 relative">
              <img
                src="/images/icon-park-outline_trend-two.svg"
                alt=""
                width={40}
              />
              <div className="w-16 border-2 border-white"></div>

              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex  flex-col gap-4 relative">
              <img src="/images/tabler_brand-ok-ru.svg" alt="" width={40} />
              <div className="w-16 border-2 border-white"></div>

              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex  flex-col gap-4 relative">
              <img src="/images/bi_shop.svg" alt="" width={40} />
              <div className="w-16 border-2 border-white"></div>

              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] mx-auto ">
          <div className="w-full flex flex-col items-center gap-6">
            <div>
              <p className="text-slate-900 text-5xl font-bold font-['Inter']">
                Why Choose Azany?
              </p>
              <p className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">
                Discover the Azany Advantage!
              </p>
              <small className="text-neutral-600 text-base font-medium font-['Inter']">
                All paid plans start with a 14 day trial period.
              </small>
            </div>
            <div className="flex flex-row gap-8 justify-center xs:flex-col mx-auto">
              <PlansCard
                price={"$44"}
                module={"Basic Plan"}
                // onClick={() => handleCardClick("basic")}
                // selected={selectedPlan === "basic"}
              />
              <PlansCard
                price={"$79"}
                module={"Standard Plan"}
                // onClick={() => handleCardClick("standard")}
                recommended
                // selected={selectedPlan === "standard"}
              />
              <PlansCard
                price={"$99"}
                module={"Premium Plan"}
                // onClick={() => handleCardClick("premium")}
                // selected={selectedPlan === "premium"}
              />
            </div>
            <Link to={"/"}>
              <div className="text-[#FFFFFF] bg-[#E51B48] py-3 w-[250px] text-center rounded-lg">
                Get Started
              </div>
            </Link>
          </div>
        </div>

        <div className="flex w-[90%] mx-auto "></div>
      </div>
      <Footer style={"bg-[#1B7CFC] w- py-10 px-10 xs:hidden"} />
      <MobileFooter
        style={
          "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
        }
      />
    </div>
  );
};

export default ManufacturerHomePage;
