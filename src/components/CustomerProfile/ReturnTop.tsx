import BottomHeader from "../General/BottomHeader";
import Header from "../General/Header";
import MobileHeader from "../General/MobileHeader";
import TopHeader from "../General/TopHeader";

const ReturnTop = () => {
  return (
    <>
      <BottomHeader style={"bg-[#221E22] py-2 hidden md:block"} />
      <MobileHeader />
      <Header style={"bg-[#44444C] hidden md:block"} />
    </>
  );
};

export default ReturnTop;
