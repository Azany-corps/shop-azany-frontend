import BottomHeader from "../General/BottomHeader";
import Header from "../General/Header";
import MobileHeader from "../General/MobileHeader";
import TopHeader from "../General/TopHeader";

const ReturnTop = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader
        style={"bg-[#132A13] py-2 py-2 xs:hidden"}
        isFarmer={true}
      />
      <MobileHeader isFarmer={true} style={"bg-[#132A13]"} />
      <Header style={"bg-[#90A955] xs:hidden"} />
    </>
  );
};

export default ReturnTop;
