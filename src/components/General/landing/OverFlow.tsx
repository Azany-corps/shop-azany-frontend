import React from "react";

const OverFlow = () => {
  return (
    <div className="mx-12 xs:mx-4 flex flex-row space-x-5">
      <div className="p-5 h-[550px] rounded-[10px] bg-[#fff] space-y-3">
        <div className="flex flex-row space-x-3">
          <div className="p-3 flex flex-col rounded-[10px] border-[1px] border-[#B9B9B9] h-[200px] w-[200px]">
            <div className="flex justify-center items-center">
              <img src="/images/topselling1.png" />
            </div>
            <p className="font-400">Laptops</p>
          </div>
          <div className="p-3 flex flex-col rounded-[10px] border-[1px] border-[#B9B9B9] h-[200px] w-[200px]">
            <div className="flex justify-center items-center">
              <img className="w-[155px]" src="/images/topselling2.png" />
            </div>
            <p className="">Winter Pack</p>
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="p-3 flex flex-col rounded-[10px] border-[1px] border-[#B9B9B9] h-[200px] w-[200px]">
            <div className="flex justify-center items-center">
              <img src="/images/topselling3.png" />
            </div>
            <p>Office Equipment</p>
          </div>
          <div className="flex flex-col space-x-3">
            <div className="p-3 flex flex-col rounded-[10px] border-[1px] border-[#B9B9B9] h-[200px] w-[200px]">
              <div className="flex justify-center items-center">
                <img src="/images/topselling4.png" />
              </div>
              <p className="mt-10">Laundry Equipment</p>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="general-font font-[700] text-xl">Top Selling</h1>
          <p className="general-font pt-2 font-[500] text-sm text-[#E51B48]">See More</p>
        </div>
      </div>
      <div className="p-5 w-full h-[550px] rounded-[10px] bg-[#fff] space-y-3">
        <div className="flex flex-col space-y-3">
            <div><img src="/images/topcat1.png" /></div>
            <div><img src="/images/topcat2.png" /></div>
            <div><img src="/images/topcat3.png" /></div>
        </div>
        
        <div className="pt-4">
          <h1 className="general-font font-[700] text-xl">Top Categories</h1>
          <p className="general-font pt-2 font-[500] text-sm text-[#E51B48]">See More</p>
        </div>
      </div>
      <div className="p-5 w-full h-[550px] rounded-[10px] bg-[#fff] space-y-3">
        <div>
            <img src="/images/topfarm.png" />
        </div>
        <div className="pt-4">
          <h1 className="general-font font-[700] text-xl">Top Selling</h1>
          <p className="general-font pt-2 font-[500] text-sm text-[#E51B48]">See More</p>
        </div>
      </div>
    </div>
  );
};

export default OverFlow;
