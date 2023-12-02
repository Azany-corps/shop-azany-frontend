import React, { useState, useEffect } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import callAPI from "../../api/callApi";

interface RewardsProps {}

interface IRewards {
  // order_code: string;
  // created_at: string;
  // address: string;
  // order_status: string;
  // sub_total: number;
  // id: number;
  // quantity: number;
}

const RewardsComponent: React.FC<RewardsProps> = () => {
  return (
    <CustomerProfileLayout>
      <div className="pt-[80px] font-public-sans w-full h-full">
        <p className="font-baloo font-semibold text-[40px] text-[#B3B7BB] flex justify-center items-center mt-[300px]">
          Coming soon
        </p>
      </div>
    </CustomerProfileLayout>
  );
};

export default RewardsComponent;
