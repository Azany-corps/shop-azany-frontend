import TopHeader from "../../components/General/TopHeader";
import BottomHeader from "../../components/General/BottomHeader";
import MobileHeader from "../../components/General/MobileHeader";
import Footer from "../../components/General/Footer";
import MobileFooter from "../../components/General/MobileFooter";
import Trending from "../../components/General/landing/Trending";

type Props = {};

export default function Avc({}: Props) {
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
          <div className="flex items-center justify-center gap-4 p-6 bg-white w-[90%] rounded-2xl mx-auto">
            <div className="left-img w-full  flex- items-end">
              <img src="/images/avc_card.svg" className="mx-auto" alt="" />
            </div>
            <div className="right-text w-full">
              <h1 className="text-[#1B7CFC] text-9xl font-bold">AVC</h1>
              <p className="text-lg">Azany Virtual Card</p>
            </div>
          </div>
          <div className="warehouse w-[90%] mb-5 mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-2xl px-6 py-3 border-b border-b-gray-300 ">
              About AVC
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
            <div className="button_container w-full flex py-8 justify-center">
              <button className="bg-[#E51B48] w-3/4 text-white m-4 p-2 rounded-md">
                Get AVC
              </button>
            </div>
          </div>
        </div>
        <Trending
          styles={"bg-white font-medium text-lg text-black "}
          title={"Trending Categories"}
        />
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
