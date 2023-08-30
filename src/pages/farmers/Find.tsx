import React from "react";
import Footer from "../../components/General/Footer";
import ReturnTop from "../../components/CustomerProfile/ReturnTop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BasicRating from "../../components/Core/Rating";
import MobileFooter from "../../components/General/MobileFooter";

const FarmersFind = () => {
  return (
    <div className="bg-[#F5F5F5] w-full smm:overflow-auto overflow-hidden">
      <ReturnTop />
      <div className="flex items-center justify-center bg-[#393939] text-white">
        <div className="p-2 flex-1 text-xs cursor-pointer gap-1  flex items-center justify-center">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.5 4C3.5 3.73478 3.60536 3.48043 3.79289 3.29289C3.98043 3.10536 4.23478 3 4.5 3H20.5C20.7652 3 21.0196 3.10536 21.2071 3.29289C21.3946 3.48043 21.5 3.73478 21.5 4V6.586C21.4999 6.85119 21.3946 7.10551 21.207 7.293L14.793 13.707C14.6055 13.8945 14.5001 14.1488 14.5 14.414V17L10.5 21V14.414C10.4999 14.1488 10.3945 13.8945 10.207 13.707L3.793 7.293C3.60545 7.10551 3.50006 6.85119 3.5 6.586V4Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          FILTER
        </div>
        <div className="fliter p-2 text-xs cursor-pointer flex-1 flex items-center justify-center">SORT BY POPULARITY &#9660;</div>
      </div>
      <div className="smm:w-[90%] w-[95%] mx-auto">
        <div className="flex flex-row my-6 gap-4">
          <div className="lgm:flex hidden flex-col p-8 h-fit position sticky top-8 gap-6 bg-white rounded-md w-[385px]">
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
          <div className="flex lgm:hidden flex-col gap-4 w-full">
            <div className="flex w-full lgm:hidden smm:p-4 p-2 smm:gap-4 gap-2 shadow-md rounded-lg">
              <img src="/images/parboiledrice.png" alt="" className="smm:w-[180px] w-[98px]  aspect-square object-contain" />
              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between text-sm smm:text-base">
                  <p>$37.99/bag</p>
                  <FavoriteBorderIcon className="text-[#E51B48]" />
                </div>
                <div className="bottom flex-col smm:gap-3 gap-1 flex">
                  <p>Long Rice</p>
                  <div className="flex items-start gap-4 smm:text-base text-smm">
                    <p className="font-medium text-[#90A955] smm:text-base text-sm">Mama Gold</p>
                    <p className=" text-[#515151]">|</p>
                    <p className="text-[#515151]">Nigeria</p>
                  </div>
                  <div className="flex  smm:gap-4 gap-2 items-center">
                    <p className="font-light text-xs smm:text-base">30Kg Medium Size</p>
                    <p className="font-medium text-[#515151]">|</p>
                    <BasicRating rating={2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full lgm:hidden smm:p-4 p-2 smm:gap-4 gap-2 shadow-md rounded-lg">
              <img src="/images/parboiledrice.png" alt="" className="smm:w-[180px] w-[98px]  aspect-square object-contain" />
              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between text-sm smm:text-base">
                  <p>$37.99/bag</p>
                  <FavoriteBorderIcon className="text-[#E51B48]" />
                </div>
                <div className="bottom flex-col smm:gap-3 gap-1 flex">
                  <p>Long Rice</p>
                  <div className="flex items-start  gap-4 smm:text-base text-smm">
                    <p className="font-medium text-[#90A955] smm:text-base text-sm">Mama Gold</p>
                    <p className=" text-[#515151]">|</p>
                    <p className="text-[#515151]">Nigeria</p>
                  </div>
                  <div className="flex  smm:gap-4 gap-2 items-center">
                    <p className="font-light text-xs smm:text-base">30Kg Medium Size</p>
                    <p className="font-medium text-[#515151]">|</p>
                    <BasicRating rating={2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full lgm:hidden smm:p-4 p-2 smm:gap-4 gap-2 shadow-md rounded-lg">
              <img src="/images/parboiledrice.png" alt="" className="smm:w-[180px] w-[98px]  aspect-square object-contain" />
              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between text-sm smm:text-base">
                  <p>$37.99/bag</p>
                  <FavoriteBorderIcon className="text-[#E51B48]" />
                </div>
                <div className="bottom flex-col smm:gap-3 gap-1 flex">
                  <p>Long Rice</p>
                  <div className="flex items-start gap-4 smm:text-base text-smm">
                    <p className="font-medium text-[#90A955] smm:text-base text-sm">Mama Gold</p>
                    <p className=" text-[#515151]">|</p>
                    <p className="text-[#515151]">Nigeria</p>
                  </div>
                  <div className="flex  smm:gap-4 gap-2 items-center">
                    <p className="font-light text-xs smm:text-base">30Kg Medium Size</p>
                    <p className="font-medium text-[#515151]">|</p>
                    <BasicRating rating={2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lgm:grid hidden grid-cols-1 mdm:grid-cols-2 lgm:grid-cols-3 gap-4">
            <div className="bg-white rounded-md p-4 flex-col flex justify-between">
              <div className="flex justify-between">
                <p className="text-[#515151]">$37.99/bag</p>
                <FavoriteBorderIcon className="text-[#E51B48]" />
              </div>
              <img src="/images/parboiledrice.png" alt="" className="w-[300px]" />
              <div>
                <p className="font-medium">Long Rice</p>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">Mama Gold</p>
                  <p className=" text-[#515151]">|</p>
                  <p className="text-[#515151]">Nigeria</p>
                </div>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">30Kg Medium Size</p>
                  <p className="font-medium text-[#515151]">|</p>
                  <BasicRating rating={2} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md p-4 flex-col flex justify-between">
              <div className="flex justify-between">
                <p className="text-[#515151]">$37.99/bag</p>
                <FavoriteBorderIcon className="text-[#E51B48]" />
              </div>
              <img src="/images/parboiledrice.png" alt="" className="w-[300px]" />
              <div>
                <p className="font-medium">Long Rice</p>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">Mama Gold</p>
                  <p className=" text-[#515151]">|</p>
                  <p className="text-[#515151]">Nigeria</p>
                </div>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">30Kg Medium Size</p>
                  <p className="font-medium text-[#515151]">|</p>
                  <BasicRating rating={2} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 flex-col flex justify-between">
              <div className="flex justify-between">
                <p className="text-[#515151]">$37.99/bag</p>
                <FavoriteBorderIcon className="text-[#E51B48]" />
              </div>
              <img src="/images/parboiledrice.png" alt="" className="w-[300px]" />
              <div>
                <p className="font-medium">Long Rice</p>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">Mama Gold</p>
                  <p className=" text-[#515151]">|</p>
                  <p className="text-[#515151]">Nigeria</p>
                </div>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">30Kg Medium Size</p>
                  <p className="font-medium text-[#515151]">|</p>
                  <BasicRating rating={2} />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md p-4 flex-col flex justify-between">
              <div className="flex justify-between">
                <p className="text-[#515151]">$37.99/bag</p>
                <FavoriteBorderIcon className="text-[#E51B48]" />
              </div>
              <img src="/images/parboiledrice.png" alt="" className="w-[300px]" />
              <div>
                <p className="font-medium">Long Rice</p>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">Mama Gold</p>
                  <p className=" text-[#515151]">|</p>
                  <p className="text-[#515151]">Nigeria</p>
                </div>
                <div className="flex items-start gap-4">
                  <p className="font-medium text-[#90A955]">30Kg Medium Size</p>
                  <p className="font-medium text-[#515151]">|</p>
                  <BasicRating rating={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer style={"bg-[#132A13] py-10 px-10 smm:block hidden"} />
      <MobileFooter isFarmer={true} style={"bg-[#132A13] block  smm:hidden "} />
    </div>
  );
};

export default FarmersFind;
