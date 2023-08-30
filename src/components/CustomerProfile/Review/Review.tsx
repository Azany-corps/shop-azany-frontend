import React from "react";
import { IconButton } from "@mui/material";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import '../ndex.css'
type Props = {};

const Review = (props: Props) => {
  return (
    <div className="p-4 grid grid-cols-6 gap-4 shadow-md items-center bg-white">
      <div className="col-span-1">
        <img src="/images/review_001.png" />
      </div>
      <div className="col-span-5 space-y-2">
        <div className="py-3 flex justify-between items-center">
          <h2 className="font-bold">Pristine Steel (30inch) </h2>
          <p className="text-[#E51B48]">Edit</p>
        </div>
        <div className="py-2 px-3  rounded-[10px] border-gray-200">
          <p>
            sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consec
          </p>
          <div className="flex items-center space-x-2">
            <IconButton>
              <AccessTimeIcon />
            </IconButton>
            <p>22-03-2023</p>
            <Rating value={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
