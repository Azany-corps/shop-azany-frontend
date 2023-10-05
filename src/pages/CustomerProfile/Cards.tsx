import React from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/CustomerProfileLayout";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
type Props = {};

const Cards = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">
      <CustomerProfileLayout>
        <div className="p-8 xs:p-4 w-full rounded-md h-[1005px]">
          <div className="w-full">
            <h1 className="text-[36px] font-[500] xs:text-[22px]">
              Payment Methods
            </h1>
            <p className="text-[18px]">
              Save and manage your payment details for a fast checkout.
            </p>
            <div className="">
              <div className="">
                <div className="mx-auto py-10 flex items-start space-x-3">
                  <div>
                    <img src="/images/cards_001.png" />
                  </div>
                  <div className="space-y-3">
                    <h2>Mastercard</h2>
                    <h2>XXX XXXX XXXX XXXX 3426</h2>
                    <div className="flex justify-between items-center ">
                      <p className="text-[#1B7CFC] font-bold">Edit</p>
                      <p className="text-[#E51B48] font-bold">Remove</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 mt-2">
              <div className="mx-auto py-3">
                <div className="h-[133.5px] w-[244px] flex items-center justify-center cursor-pointer bg-[#EDEDED] rounded-[10px] border-dashed">
                  <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                      <p>Add Card</p>
                    </div>
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

export default Cards;
