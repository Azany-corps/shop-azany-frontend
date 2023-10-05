import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col justify-between min-h-screen">
      <CustomerProfileLayout>
        <div className="px-10 py-7 xs:p-2 smm:bg-[#F5F5F5] !bg-white border w-full !rounded-lg flex-grow h-[1005px]">
          <div className="w-full">
            <h1 className="text-[36px] font-[500] xs:text-[22px]">
              Personal Details
            </h1>
            <p className="text-[18px]">
              Update your name, email, and account password at any time.
            </p>

            <div className="py-10 w-full">
              <div className="xs:flex xs:flex-col flex flex-col items-start w-full">
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="">
                    <label className="text-[12px]">FIRST NAME</label>
                    <input
                      placeholder="John"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div>
                    <label className="text-[12px]">LAST NAME</label>
                    <input
                      placeholder="Clinton"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">EMAIL</label>
                    <input
                      placeholder="Johnclinton231@gmail.com"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">PHONE</label>
                    <input
                      placeholder="803-4646-362"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="w-[50%] sm:w-full xs:w-full md:w-full relative flex flex-col items-start">
                  <div className="flex flex-col">
                    <label className="text-[12px]">PASSWORD</label>
                    <input
                      placeholder="***************"
                      type="password"
                      className="xs:w-full py-3 w-4/5 text-[20px] font-[400]"
                    />
                  </div>
                  <div>
                    <p className="absolute right-32 top-9 cursor-pointer text-[#E51B48]">
                      Edit
                    </p>
                  </div>
                </div>
                <div className="py-12">
                  <input
                    className="bg-[#E51B48] w-[975px] h-[50px] p-[10px] font-[16px] text-white rounded-[10px] text-center cursor-pointer"
                    type="button"
                    value="Save"
                  />
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
