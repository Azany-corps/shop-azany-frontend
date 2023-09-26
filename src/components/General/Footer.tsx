import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  style: string;
}

const Footer = ({ style }: FooterProps) => {
  return (
    <>
      <footer className={`${style}`}>
        <div className="mx-auto grid grid-cols-5 items-start">
          <div className="md:w-30 w-40">
            <img src="/images/azanylogofinal.png" alt="logo" className="bg-white p-2"/>
          </div>
          <div className="">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer text-xl font-normal ">ABOUT AZANY</h1>
              <div className="mt-2 py-4">
                <p className="font-normal">About Us</p>
                <p className="font-normal">Cookie Notice</p>
                <p className="font-normal">Privacy Notice</p>
                <p className="font-normal">Terms & Conditons</p>
                <p className="font-normal">Top deals</p>
                <p className="font-normal">Blodg</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer text-xl font-normal ">Help</h1>
              <div className="mt-2 py-4 flex flex-col">
                <Link className="font-normal" to={"/report/vendor"}>
                  Report a vendor
                </Link>
                <Link className="font-normal" to={"/report/product"}>
                  Report a product
                </Link>
                <Link className="font-normal" to={"/docs/refund-policy"}>
                  Returns & Refund Policy
                </Link>
                <Link className="font-normal" to={"/doc/track-order"}>
                  Help Center
                </Link>
                <Link className="font-normal" to={"/doc/track-order"}>
                  Orders
                </Link>
                <Link className="font-normal" to={"/doc/avc"}>
                  AVC
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-left text-white">
              <h1 className="text-white cursor-pointer text-xl font-normal ">Make Us Money</h1>
              <div className="mt-2 py-4 flex flex-col">
                <Link to={"/doc/sell-on-azany-business"} className="font-normal">
                  About Us
                </Link>
                <Link to={"/doc/sell-on-azany-business"} className="font-normal">
                  Cookie Notice
                </Link>
                <Link to={"/doc/"} className="font-normal">
                  Privacy Notice
                </Link>
                <Link to={"/doc/"} className="font-normal">
                  Terms & Conditons
                </Link>
                <Link to={"/doc/"} className="font-normal">
                  Top deals
                </Link>
                <Link to={"/doc/"} className="font-normal">
                  Blog
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="space-y-3 cursor-pointer text-center md:text-left">
              <h1 className="text-xl font-normal text-white">Stay Connected</h1>
              <p className="text-white">Join our email list to get exclusive updates on the best deals.</p>
              <input className="py-3 outline-none px-2 w-full rounded-[50px]" />
              <button className="bg-[#E51B48] py-2 px-3 text-white rounded-full border-[#FFFFFF]">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="py-14">
          <p className="text-center text-white">c2023 Azany ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
