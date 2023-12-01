// EmptyComponent.tsx

import React, { useEffect } from "react";
import ManufacturersProfileLayoutComp from "../../../components/General/manufacturers/profile/LayoutComp";
import callAPI from "../../../api/callApi";

interface ReviewsProps {}

const ReviewsComponent: React.FC<ReviewsProps> = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getReviews = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await callAPI(
          `general/products/2/getreview/1`,
          "GET",
          null,
          headers
        );
        console.log(response.data.values);
        return response.data.values;
      } catch (err) {
        console.log(err);
      }
    };

    // getReviews();
  }, []);
  return (
    <ManufacturersProfileLayoutComp>
      <div className="pt-[80px] font-public-sans">
        <p className="capitalize text-xl font-semibold font-baloo">Reviews</p>
        <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
          View, edit and delete your comments
        </p>
        <p>No reviews yet</p>
      </div>
    </ManufacturersProfileLayoutComp>
  );
};

export default ReviewsComponent;
