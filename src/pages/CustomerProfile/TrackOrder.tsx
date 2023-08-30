import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";

type Props = {};

const TrackOrder = (props: Props) => {
  return (
    <CustomerProfileLayout>
      <div className="p-8 w-full">
        <div className="w-full">
          <div className="">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Track Order</h1>
          </div>
        </div>
      </div>
    </CustomerProfileLayout>
  );
};

export default TrackOrder;
