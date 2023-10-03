import React from "react";

interface NewsletterProps {
  style: string;
}

const Newsletter = ({ style }: NewsletterProps) => {
  return (
    <div className={`${style}`}>
      <div className="flex sm:flex-col flex-row justify-between items-center ">
        <div>
          <div className="md:w-30 w-40">
            <img
              src="/images/azanylogofinal.png"
              alt="logo"
              className="bg-white p-2"
            />
          </div>
        </div>

        <div className="flex flex-row text-center">
          <div className="justify-end text-left ">
            <div className="space-y-3 cursor-pointer text-left">
              <h1 className="text-xl font-semibold text-white capitalize">
                STAY CONNECTED
              </h1>
              <p className="text-white">
                Join our email list to get exclusive updates on the best deals.
              </p>
              <div className="flex flex-row">
                <input
                  placeholder="email address"
                  className="w-[365.833px] mr-3 py-3 outline-none px-2 rounded-[50px] border-[#6F6F6F] border-2"
                />
                <button className="bg-[#E51B48] py-2 px-3 text-white rounded-full border-[#FFFFFF] border-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="bottom-0 text-right items-end">
            <p>Logo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
