import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

type Props = {};

const Address = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">
      <CustomerProfileLayout>
        <div className="p-8 xs:p-4 w-full">
          <div className="w-full">
            <h1 className="text-[36px] font-[500] xs:text-[22px]">Addresses</h1>
            <p className="text-[18px]">
              Add your preferred addresses and choose a favourite.
            </p>
          </div>

          <div className="py-10 mt-3">
            <div className="py-6 px-3 flex justify-between items-center bg-white rounded-md shadow-md">
              <div className="">
                <h2>Salvation army street, governor's road, ikotun, Lagos</h2>
                <h2> Lagos, Lagos 100001</h2>
                <h2> Nigeria</h2>
                <h2> Phone number: ‪08093704485‬</h2>
              </div>
            </div>
          </div>
          <div className="">
              <div className="mx-auto py-3">
                <div className="h-[133.5px] w-[244px] flex items-center justify-center cursor-pointer bg-[#EDEDED] rounded-[10px] border-dashed border-black">
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                      <p>Add Address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default Address;
