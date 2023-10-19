import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  style: string;
}

const Footer = ({ style }: FooterProps) => {
  return (
    <>  
      <footer className={`${style}`}>
        <div className="mx-auto flex flex-row justify-between">
          
          <div className="">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer font-semibold text-xl general-font">ABOUT AZANY</h1>
              <div className="mt-2 py-4">
                <p className="font-normal pb-2 general-font">About Us</p>
                <p className="font-normal pb-2 general-font">Cookie Notice</p>
                <p className="font-normal pb-2 general-font">Privacy Notice</p>
                <p className="font-normal pb-2 general-font">Terms & Conditons</p>
                <p className="font-normal pb-2 general-font">Top deals</p>
                <p className="font-normal pb-2 general-font">Blog</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer text-xl font-semibold capitalize general-font">HELP</h1>
              <div className="mt-2 py-4 flex flex-col">
                <Link className="general-font font-normal pb-2" to={"/report/vendor"}>
                  Report a vendor
                </Link>
                <Link className="general-font font-normal pb-2" to={"/report/product"}>
                  Report a product
                </Link>
                <Link className="general-font font-normal pb-2" to={"/docs/refund-policy"}>
                  Returns & Refund Policy
                </Link>
                <Link className="general-font font-normal pb-2" to={"/doc/track-order"}>
                  Help Center
                </Link>
                <Link className="general-font font-normal pb-2" to={"/doc/track-order"}>
                  Orders
                </Link>
                <Link className="general-font font-normal pb-2" to={"/doc/avc"}>
                  AVC
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-0">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer text-xl font-semibold capitalize ">MAKE US MONEY</h1>
              <div className="mt-2 py-4 flex flex-col">
                <Link to={"/sell-on-azany/farmers"} className="general-font font-normal pb-2">
                  Sell on Azany
                </Link>
                <Link to={"/sell-on-azany/manufacturers-merchant"} className="general-font font-normal pb-2">
                Sell on Azany Business
                </Link>
                <Link to={"/doc/"} className="general-font font-normal pb-2">
                  Become an affiliate
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-left text-white">
              <h1 className="general-font text-white cursor-pointer text-xl font-semibold capitalize ">MAKE US MONEY</h1>
              <div className="mt-2 py-4 flex flex-col">
                <Link to={"/doc/sell-on-azany-business"} className="general-font font-normal pb-2">
                  Sell on Azany
                </Link>
                <Link to={"/doc/sell-on-azany-business"} className="general-font font-normal pb-2">
                Sell on Azany Business
                </Link>
                <Link to={"/doc/"} className="general-font font-normal pb-2">
                  Become an affiliate
                </Link>
              </div>
            </div>
          </div>
          {/*<div className="">
            <div className="space-y-3 cursor-pointer text-center md:text-left">
              <h1 className="text-xl font-normal text-white">Stay Connected</h1>
              <p className="text-white">Join our email list to get exclusive updates on the best deals.</p>
              <input className="py-3 outline-none px-2 w-full rounded-[50px]" />
              <button className="bg-[#E51B48] py-2 px-3 text-white rounded-full border-[#FFFFFF]">Subscribe</button>
            </div>
          </div>*/}
        </div>
        <div className="py-10">
          <p className="general-font text-center text-white">c2023 Azany ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
