import BottomHeader from "../../../components/General/BottomHeader";
import Footer from "../../../components/General/Footer";
import Header from "../../../components/General/Header";
import TopHeader from "../../../components/General/TopHeader";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StepperComponent from "../../../components/Core/Stepper";
import MobileHeader from "../../../components/General/MobileHeader";
import MobileFooter from "../../../components/General/MobileFooter";
import BackButton from "../../../components/Core/BackButton";

const TrackingProgress = () => {
  const order = {
    image: "/images/ordershirt.png",
    item: "MURIOKI Mens Printed T-Shirt Short Sleeve Shirt - Blue",
    vendor: "Chukwudi Enterprise",
    price: "$566",
    status: "In Stock",
    time: "Order Placed 09/01",
  };

  return (
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <TopHeader />
      <BottomHeader style={"bg-[#1B7CFC] py-2 xs:hidden"} />
      <MobileHeader />
      <Header style={"bg-[#70ADFF] xs:hidden"} />
      <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>Your Account</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">Track Order</p>
      </div>
      <div className="sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden py-2">
        <BackButton />
      </div>
      <div className="p-10 xs:p-4 w-[90%] xs:w-[94%] mx-auto mb-10 bg-white rounded-lg">
        <div className="flex justify-between xs:hidden">
          <div className="flex items-center gap-2 text-[#515151]">
            <ArrowBackIcon />
            Back
          </div>
        </div>
        <div className="w-[60%] xs:w-full items-center flex flex-col mx-auto gap-6">
          <div className="flex flex-col xs:items-left items-center gap-4">
            <h1 className="text-[40px] xs:text-left xs:text-[26px] font-[500]">Track Order</h1>
            <p className="xs:text-left">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="p-4 bg-white rounded-md shadow-md flex justify-between">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <img src={order.image} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-medium text-[16px]">{order.item}</p>
                <p className="font-medium text-[16px] text-[#515151]">{order.vendor}</p>
                <p className="text-[#515151]">{order.status}</p>
                <p className="text-[#515151]">{order.time}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center items-end">
              <p className="font-medium text-[24px]"></p>
              <p className="text-[#515151]">
                Status: <span className="font-medium">Pending</span>{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-2 border rounded-md p-4 items-center flex-row">
            <div>
              <p>
                Order <span className="text-[#1B7CFC]">#Y34WXD6311</span>
              </p>
            </div>
            <div>
              <p className="text-[#515151]">Expected Arrival 01/04/2023</p>
              <p className="text-[#515151]">
                Tracking Number <span className="text-black">2653476400ASHF7362F</span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <StepperComponent />
        </div>
      </div>
      <Footer style={"bg-[#1B7CFC] py-10 px-10 xs:hidden"} />
      <MobileFooter style={"bg-[#1B7CFC] sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden"} />{" "}
    </div>
  );
};

export default TrackingProgress;
