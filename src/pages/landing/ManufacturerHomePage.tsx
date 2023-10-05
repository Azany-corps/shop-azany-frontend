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
import TestimonialSOA from "../../components/General/sell-on-azany/TestimonialSOA";

const ManufacturerHomePage = () => {
  return (
    <div className="xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <MobileHeader />
      <div className="flex flex-col gap-20">
        <div className="flex flex-row items-center justify-between pt-6 md:flex-col  bg-[#DBEAFF] pl-6 mt-6 w-[90%] rounded-2xl mx-auto">
          <div className="right-text w-full  mr-3 max-w-[450px]">
            <h1 className="text-[#0A1F3B] text-5xl font-bold mb-4">
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
          <div className="left-img  flex- items-end">
            <img src="/images/malap.svg" className="" alt="" />
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
            <p className="text-slate-900 text-center text-5xl font-bold font-['Inter']">
              Why Choose Azany?
            </p>
            <p className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">
              Discover the Azany Advantage!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-11 mdm:grid-cols-12 gap-6 w-[90%] items-center mx-auto justify-between">
          <div className="col-span-12 mdm:col-span-4 flex-col flex gap-5">
            <div
              className="img w-full h-[325px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/branch-creation.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className=" text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
          <div className="col-span-12 mdm:col-span-4 flex-col flex gap-5">
            <div
              className="img  w-full h-[377px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/logistics.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className="text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.
            </p>
          </div>
          <div className="col-span-12 mdm:col-span-4 flex-col flex gap-5">
            <div
              className="img w-full h-[325px] rounded-lg bg-cover"
              style={{ backgroundImage: "url(/images/shipping.jpeg)" }}
            ></div>
            <p className="text-black text-3xl font-medium font-['Inter']">
              Branch Creation
            </p>
            <p className=" text-black text-base font-normal font-['Inter'] leading-loose">
              Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
              consectetur.Lore ipsum dolor sit amet consectetur.Lorem
            </p>
          </div>
        </div>
        <div className="flex w-[90%] items-center mx-auto justify-between">
          <div className="w-full flex-wrap flex-1 py-9 bg-slate-900 rounded-2xl justify-between items-center gap-12 px-6 flex">
            <div className="flex flex-1 flex-col gap-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <path
                  d="M0 8.625V11.5H27.3125V33.0625H18.4632C17.8221 30.5914 15.5997 28.75 12.9375 28.75C10.2753 28.75 8.05288 30.5914 7.41175 33.0625H5.75V25.875H2.875V35.9375H7.41175C8.05288 38.4086 10.2753 40.25 12.9375 40.25C15.5997 40.25 17.8221 38.4086 18.4632 35.9375H30.4118C31.0529 38.4086 33.2752 40.25 35.9375 40.25C38.5998 40.25 40.8221 38.4086 41.4632 35.9375H46V24.2133L45.9094 23.9876L43.0344 15.3626L42.7225 14.375H30.1875V8.625H0ZM1.4375 14.375V17.25H14.375V14.375H1.4375ZM30.1875 17.25H40.6539L43.125 24.6172V33.0625H41.4632C40.8221 30.5914 38.5998 28.75 35.9375 28.75C33.2752 28.75 31.0529 30.5914 30.4118 33.0625H30.1875V17.25ZM2.875 20.125V23H11.5V20.125H2.875ZM12.9375 31.625C14.5432 31.625 15.8125 32.8943 15.8125 34.5C15.8125 36.1057 14.5432 37.375 12.9375 37.375C11.3318 37.375 10.0625 36.1057 10.0625 34.5C10.0625 32.8943 11.3318 31.625 12.9375 31.625ZM35.9375 31.625C37.5432 31.625 38.8125 32.8943 38.8125 34.5C38.8125 36.1057 37.5432 37.375 35.9375 37.375C34.3318 37.375 33.0625 36.1057 33.0625 34.5C33.0625 32.8943 34.3318 31.625 35.9375 31.625Z"
                  fill="white"
                />
              </svg>
              <div className="w-16 border-2 border-white"></div>
              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <path
                  d="M3.8335 42.1667H42.1668"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.8335 24.9167L11.5002 26.8333V36.4167H3.8335V24.9167ZM19.1668 23L26.8335 19.1667V36.4167H19.1668V23ZM34.5002 15.3333L42.1668 11.5V36.4167H34.5002V15.3333Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.8335 17.25L11.5002 19.1667L42.1668 3.83337H32.5835"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="w-16 border-2 border-white"></div>

              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="69"
                height="69"
                viewBox="0 0 69 69"
                fill="none"
              >
                <path
                  d="M28.75 25.875C28.75 27.4 29.3558 28.8625 30.4341 29.9409C31.5125 31.0192 32.975 31.625 34.5 31.625C36.025 31.625 37.4875 31.0192 38.5659 29.9409C39.6442 28.8625 40.25 27.4 40.25 25.875C40.25 24.35 39.6442 22.8875 38.5659 21.8091C37.4875 20.7308 36.025 20.125 34.5 20.125C32.975 20.125 31.5125 20.7308 30.4341 21.8091C29.3558 22.8875 28.75 24.35 28.75 25.875Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M57.5 34.5C57.5 57.5 57.5 57.5 34.5 57.5C11.5 57.5 11.5 57.5 11.5 34.5C11.5 11.5 11.5 11.5 34.5 11.5C57.5 11.5 57.5 11.5 57.5 34.5Z"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.3125 37.375C31.1449 39.2926 37.8551 39.2926 41.6875 37.375M27.3125 48.875L34.5 40.25M34.5 40.25L41.6875 48.875M34.5 40.25V38.8125"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="w-16 border-2 border-white"></div>

              <div className=" text-white text-3xl font-medium font-['Inter']">
                Shipping
              </div>
              <div className="text-white text-base font-normal font-['Inter'] leading-loose">
                Lorem ipsum dolor sit amet consec. Lorem ipsum dolor sit amet
                consectetur.Lore ipsum dolor sit amet consectetur.Lorem
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <g clip-path="url(#clip0_4456_26403)">
                  <path
                    d="M8.53875 3.88125C8.80867 3.56567 9.14376 3.31232 9.52095 3.13861C9.89814 2.96491 10.3085 2.87497 10.7238 2.875H35.2763C35.6915 2.87497 36.1019 2.96491 36.4791 3.13861C36.8562 3.31232 37.1913 3.56567 37.4613 3.88125L44.9621 12.6328C45.6318 13.4143 46 14.4095 46 15.4387V16.1719C46.0002 17.5949 45.5557 18.9825 44.7287 20.1406C43.9018 21.2987 42.7336 22.1695 41.3876 22.6313C40.0415 23.093 38.5848 23.1227 37.2211 22.7162C35.8573 22.3096 34.6547 21.4871 33.7812 20.3636C33.1434 21.1852 32.326 21.8499 31.3916 22.3069C30.4573 22.7639 29.4307 23.0009 28.3906 23C27.3505 23.0012 26.3239 22.7642 25.3895 22.3072C24.4551 21.8502 23.6377 21.1854 23 20.3636C22.3623 21.1854 21.5449 21.8502 20.6105 22.3072C19.6761 22.7642 18.6495 23.0012 17.6094 23C16.5692 23.0012 15.5426 22.7642 14.6082 22.3072C13.6738 21.8502 12.8564 21.1854 12.2188 20.3636C11.3453 21.4871 10.1427 22.3096 8.77892 22.7162C7.41518 23.1227 5.95848 23.093 4.61243 22.6313C3.26638 22.1695 2.09824 21.2987 1.27127 20.1406C0.444308 18.9825 -0.000156971 17.5949 4.15856e-08 16.1719V15.4387C3.62467e-05 14.4095 0.368163 13.4143 1.03788 12.6328L8.54163 3.87837L8.53875 3.88125ZM13.6562 16.1719C13.6562 17.2203 14.0727 18.2258 14.8141 18.9672C15.5554 19.7085 16.5609 20.125 17.6094 20.125C18.6578 20.125 19.6633 19.7085 20.4047 18.9672C21.146 18.2258 21.5625 17.2203 21.5625 16.1719C21.5625 15.7906 21.714 15.425 21.9835 15.1554C22.2531 14.8858 22.6188 14.7344 23 14.7344C23.3812 14.7344 23.7469 14.8858 24.0165 15.1554C24.2861 15.425 24.4375 15.7906 24.4375 16.1719C24.4375 17.2203 24.854 18.2258 25.5953 18.9672C26.3367 19.7085 27.3422 20.125 28.3906 20.125C29.4391 20.125 30.4446 19.7085 31.1859 18.9672C31.9273 18.2258 32.3438 17.2203 32.3438 16.1719C32.3438 15.7906 32.4952 15.425 32.7648 15.1554C33.0344 14.8858 33.4 14.7344 33.7812 14.7344C34.1625 14.7344 34.5281 14.8858 34.7977 15.1554C35.0673 15.425 35.2188 15.7906 35.2188 16.1719C35.2188 17.2203 35.6352 18.2258 36.3766 18.9672C37.1179 19.7085 38.1234 20.125 39.1719 20.125C40.2203 20.125 41.2258 19.7085 41.9672 18.9672C42.7085 18.2258 43.125 17.2203 43.125 16.1719V15.4387C43.125 15.0961 43.0027 14.7648 42.78 14.5044L35.2763 5.75H10.7238L3.22 14.5044C2.99732 14.7648 2.87497 15.0961 2.875 15.4387V16.1719C2.875 17.2203 3.29149 18.2258 4.03284 18.9672C4.7742 19.7085 5.77969 20.125 6.82812 20.125C7.87656 20.125 8.88205 19.7085 9.62341 18.9672C10.3648 18.2258 10.7812 17.2203 10.7812 16.1719C10.7812 15.7906 10.9327 15.425 11.2023 15.1554C11.4719 14.8858 11.8375 14.7344 12.2188 14.7344C12.6 14.7344 12.9656 14.8858 13.2352 15.1554C13.5048 15.425 13.6562 15.7906 13.6562 16.1719ZM4.3125 24.4375C4.69375 24.4375 5.05938 24.5889 5.32897 24.8585C5.59855 25.1281 5.75 25.4938 5.75 25.875V43.125H8.625V28.75C8.625 27.9875 8.9279 27.2562 9.46707 26.7171C10.0062 26.1779 10.7375 25.875 11.5 25.875H20.125C20.8875 25.875 21.6188 26.1779 22.1579 26.7171C22.6971 27.2562 23 27.9875 23 28.75V43.125H40.25V25.875C40.25 25.4938 40.4015 25.1281 40.671 24.8585C40.9406 24.5889 41.3063 24.4375 41.6875 24.4375C42.0687 24.4375 42.4344 24.5889 42.704 24.8585C42.9735 25.1281 43.125 25.4938 43.125 25.875V43.125H44.5625C44.9437 43.125 45.3094 43.2765 45.579 43.546C45.8485 43.8156 46 44.1813 46 44.5625C46 44.9437 45.8485 45.3094 45.579 45.579C45.3094 45.8485 44.9437 46 44.5625 46H1.4375C1.05625 46 0.690618 45.8485 0.421034 45.579C0.151451 45.3094 4.15856e-08 44.9437 4.15856e-08 44.5625C4.15856e-08 44.1813 0.151451 43.8156 0.421034 43.546C0.690618 43.2765 1.05625 43.125 1.4375 43.125H2.875V25.875C2.875 25.4938 3.02645 25.1281 3.29603 24.8585C3.56562 24.5889 3.93125 24.4375 4.3125 24.4375ZM11.5 43.125H20.125V28.75H11.5V43.125ZM25.875 28.75C25.875 27.9875 26.1779 27.2562 26.7171 26.7171C27.2562 26.1779 27.9875 25.875 28.75 25.875H34.5C35.2625 25.875 35.9938 26.1779 36.5329 26.7171C37.0721 27.2562 37.375 27.9875 37.375 28.75V37.375C37.375 38.1375 37.0721 38.8688 36.5329 39.4079C35.9938 39.9471 35.2625 40.25 34.5 40.25H28.75C27.9875 40.25 27.2562 39.9471 26.7171 39.4079C26.1779 38.8688 25.875 38.1375 25.875 37.375V28.75ZM34.5 28.75H28.75V37.375H34.5V28.75Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4456_26403">
                    <rect width="46" height="46" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
        <div className="flex w-[90%] mx-auto bg-[#DBEAFF] py-6">
          <div className="w-full flex flex-col text-center items-center gap-6">
            <div>
              <p className="text-slate-900 text-5xl font-bold font-['Inter']">
                Why Choose Azany?
              </p>
              <p className="text-center text-slate-900 text-2xl font-normal font-['Inter'] leading-loose">
                Discover the Azany Advantage!
              </p>
              <small className="text-neutral-600 text-base font-medium font-['Inter'] text-center">
                All paid plans start with a 14 day trial period.
              </small>
            </div>
            <div className="flex flex-wrap flex-row gap-8 justify-center xs:flex-col mx-auto">
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

        <div className="flex w-[90%] mx-auto ">
          <TestimonialSOA />
        </div>
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
