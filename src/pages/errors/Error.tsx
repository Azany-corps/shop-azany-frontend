import { Link, useNavigate } from "react-router-dom";
import BottomHeader from "../../components/General/BottomHeader";
import Footer from "../../components/General/Footer";
import Header from "../../components/General/Header";
import MobileFooter from "../../components/General/MobileFooter";
import MobileHeader from "../../components/General/MobileHeader";
import TopHeader from "../../components/General/TopHeader";

type Props = {
  errorType: string;
  image: string;
  message: string;
};

export default function Error({ errorType, image, message }: Props) {
  const nav = useNavigate();
  return (
    <div className="w-full overflow-x-hidden">
      <div className=" flex flex-col min-h-screen">
        <div className="headers ">
          <TopHeader />
          <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
          <MobileHeader />
          <Header style={"bg-[#70ADFF] xs:hidden"} />
        </div>
        <div className="page-content flex-1 flex smm:flex-row flex-col-reverse gap-4 w-[90%] py-10 mx-auto items-center ">
          <div className="errorMessage flex flex-col gap-3 flex-1">
            <h1 className="font-bold text-6xl">Oops!</h1>
            <h3 className="font-semibold text-2xl">{errorType}</h3>
            <p className="pr-5">{message}</p>
            <div className="flex gap-3">
              <button
                onClick={() => nav(-1)}
                className="bg-white border border-[#E51B48] text-[#E51B48] text-sm font-light py-2 px-5"
              >
                Go back
              </button>
              <Link
                to={"./"}
                className="bg-[#E51B48] text-white text-sm font-light py-2 px-5"
              >
                Go home
              </Link>
            </div>
          </div>
          <div className="errorImage flex-1">
            <img src={image} className="" alt="" />
          </div>
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
  );
}
