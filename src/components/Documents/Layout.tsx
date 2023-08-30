import React from "react";
import TopHeader from "../General/TopHeader";
import BottomHeader from "../General/BottomHeader";
import MobileHeader from "../General/MobileHeader";
import Header from "../General/Header";
import { url } from "inspector";
import Footer from "../General/Footer";
import MobileFooter from "../General/MobileFooter";

type Props = {
  background: string;
  type: string;
  title: string;
  article: string;
};

export default function DocPagesLayout({ background, title, type, article }: Props) {
  return (
    <div className="w-full overflow-x-hidden bg-[#F5F5F5]">
      <div className=" flex flex-col min-h-screen">
        <div className="headers mb-6">
          <TopHeader />
          <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
          <MobileHeader />
        </div>
        {/* Page Content */}
        <div className="flex flex-col gap-4">
          <div className="flex bg-white w-[90%] rounded-2xl mx-auto">
            <div className="flex-1 h-full w-full bg-center bg-cover">
              <img src={background} alt="" />
            </div>
            <div className="flex flex-1 p-6 pl-14 text-[#1B7CFC] font-semibold text-5xl items-center ">
              <h1 className="-mt-4">
                {type}
              </h1>
            </div>
          </div>
          <div className="warehouse w-[90%] mb-5 mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-2xl px-6 py-3 border-b border-b-gray-300 ">
              {title}
            </h1>
            <p className="py-10 px-6">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur.
              <ul className="list-disc list-inside">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum
                  consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
                  amet consectetur.
                </li>
              </ul>
              dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum
              dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur
              .Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit amet
              consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.Lorem ipsum dolor sit am
              consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum
              dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="footer">
          <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
          <MobileFooter
            style={
              "bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"
            }
          />
        </div>
      </div>
    </div>
  );
}
