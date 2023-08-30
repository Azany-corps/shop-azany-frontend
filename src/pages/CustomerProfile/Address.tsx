import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";

type Props = {};

const Address = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">

    <CustomerProfileLayout>
      <div className="p-8 xs:p-4 w-full">
        <div className="w-full">
          <div className="">
            <h1 className="text-[40px] xs:text-[26px] font-[500]">Address</h1>
          </div>
        </div>

        <div className="py-10 mt-3">
          <div className="py-6 px-3 flex justify-between items-center bg-white shadow-md">
            <div className="">
              <h2>Salvation army street, governor's road, ikotun, Lagos</h2>
              <h2> Lagos, Lagos 100001</h2>
              <h2> Nigeria</h2>
              <h2> Phone number: ‪08093704485‬</h2>
            </div>
          </div>
        </div>
      </div>
    </CustomerProfileLayout>
    </div>
  );
};

export default Address;
