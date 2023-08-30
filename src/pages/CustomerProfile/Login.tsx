import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-between min-h-screen">
      <CustomerProfileLayout>
        <div className="p-8 xs:p-2 smm:bg-[#F5F5F5] bg-white w-full rounded-lg flex-grow">
          <div className="w-full">
            <h1 className="text-[40px] font-[500] xs:text-[22px]">
              Login & Security
            </h1>
            <div className="py-5 w-full">
              <div className="xs:flex xs:flex-col grid grid-cols-2 gap-8 items-start w-full">
                <div className="w-full relative flex flex-col items-start">
                  <label>FIRST NAME</label>
                  <input
                    placeholder="John"
                    className="px-4 xs:w-full py-3 w-4/5 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full  flex flex-col relative items-start">
                  <label>LAST NAME</label>
                  <input
                    placeholder="Clinton"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label>EMAIL</label>
                  <input
                    placeholder="Johnclinton231@gmail.com"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full relative flex flex-col items-start">
                  <label>PHONE</label>
                  <input
                    placeholder="07036226327"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Edit</p> */}
                </div>
                <div className="w-full flex flex-col items-start relative">
                  <label>PASSWORD</label>
                  <input
                    placeholder="*****"
                    type="password"
                    className="px-4 xs:w-full w-4/5 py-3 rounded-md border border-gray-300"
                  />
                  {/* <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">Change</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Login;
