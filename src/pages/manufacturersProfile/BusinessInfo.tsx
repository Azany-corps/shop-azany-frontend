import React from "react";
import ManufacturersProfileLayout from "../../components/General/manufacturers/profile/Layout";

const MBusiness = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="p-8 xs:p-4 w-full bg-white rounded-lg">
          <div className="w-full">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Business Information</h1>
            <p>Lorem ipsum dolor sit amet consectetur....</p>
            <div className="py-5 w-full">
              <div className="flex flex-col w-full gap-8">
                <div className="flex xs:flex-col justify-between gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">FIRST NAME</label>
                    <input placeholder="" className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">LAST NAME</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">BUSINESS NAME</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <div className="flex justify-between gap-4 xs:flex-col">
                  <div className="w-full flex flex-col items-start relative">
                    <label className="font-normal text-sm text-gray-600">EMAIL</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">PHONE</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <p className="font-[500]">Business Mailing Address</p>
                <div className="flex justify-between gap-4 xs:flex-col">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">STREET ADDRESS</label>
                    <input placeholder="" className="px-4 w-full h-[100px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">STREET ADDRESS 2</label>
                    <input placeholder="" className="px-4 w-full h-[100px] py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <p className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-[#E51B48]">Edit</p>
                  </div>
                </div>

                <div className="flex xs:flex-col justify-between gap-4">
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">COUNTRY</label>
                    <input placeholder="" className="px-4 py-3 w-full rounded-md border border-gray-300 bg-[#F5F5F5]" />
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">STATE/ PROVINCE</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                  </div>
                  <div className="w-full  flex flex-col relative items-start">
                    <label className="font-normal text-sm text-gray-600">CITY</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                  </div>
                </div>

                <div className="w-full  flex flex-col relative items-start">
                  <label className="font-normal text-sm text-gray-600">POSTAL CODE</label>
                  <input placeholder="263001" className="px-4 w-1/3 py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                </div>

                <p className="font-[500]">Business Registration Details</p>
                <div className="flex justify-between gap-4 xs:flex-col">
                  <div className="w-full flex flex-col items-start relative">
                    <label className="font-normal text-sm text-gray-600">BUSINESS REGISTRATION NUMBER</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                  </div>
                  <div className="w-full relative flex flex-col items-start">
                    <label className="font-normal text-sm text-gray-600">ADD DOCUMENT</label>
                    <input placeholder="" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
                    <img
                      src="/images/upload.png"
                      alt="upload"
                      className="absolute inset-y-0 right-0 pr-3 mt-4 flex items-center cursor-pointer text-[#E51B48] mt-9"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-[#E51B48] text-white w-full p-2 rounded-md">Save</button>
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MBusiness;
