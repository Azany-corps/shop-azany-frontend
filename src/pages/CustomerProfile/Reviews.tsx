import React, { useState, useEffect } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import callAPI from "../../api/callApi";

interface ReviewsProps {}

interface IReviews {
  order_code: string;
  // created_at: string;
  // address: string;
  // order_status: string;
  // sub_total: number;
  // id: number;
  // quantity: number;
}

const ReviewsComponent: React.FC<ReviewsProps> = () => {
  const [reviews, setReviews] = useState<Array<IReviews>>([]);

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
        setReviews(response.data.values);
        return response.data.values;
      } catch (err) {
        console.log(err);
      }
    };

    // getReviews();
  }, []);

  console.log(reviews);

  return (
    <div className="w-full h-screen bg-white">
      <CustomerProfileLayout>
        <div className="pt-[80px] font-public-sans w-full">
          {reviews?.length > 0 && (
            <>
              <p className="capitalize text-xl font-semibold font-baloo">
                Recently viewed
              </p>
              <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
                Revisit all the product you have viewed recently
              </p>
            </>
          )}
          {reviews?.length == 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <img src="/images/MysteryBox1.svg" />
              <p className="mt-[17px] font-public-sans text-xl font-semibold">
                Nothing here yet, Come back later
              </p>
            </div>
          )}
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default ReviewsComponent;
