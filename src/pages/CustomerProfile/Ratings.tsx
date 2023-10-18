import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import Review from "../../components/CustomerProfile/Review/Review";
type Props = {};

const Ratings = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">
      <CustomerProfileLayout>
        <div className="p-8 xs:p-4 w-full flex flex-col gap-4">
          <div className="">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Reviews</h1>
            <div className="">
              <p>
                To rate a product or add a review, go to <span className="text-[#1B7CFC] font-bold">order page</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Review />
            <Review />
            <Review />
          </div>
          <div className="">
            <div className="py-4 ">
              <p className="text-[#515151] text-center cursor-pointer">See more</p>
            </div>
          </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Ratings;
