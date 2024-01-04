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
          `general/products/18/getreview/28`,
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

    getReviews();
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20.82px]">
          <div className="border border-[#00000019] rounded-[15px] py-[20.89px] px-[23.87px]">
            <div className="w-full flex justify-between items-center mb-[11.19px]">
              <img src="/images/rating-star.svg" alt="rating image" />
              <img src="/images/3-dots.svg" alt="rating image" />
            </div>

            <p className="flex items-center font-public-sans text-[14.921px] font-bold text-black mb-[8.95px]">
              Pinnacle shoe shop
              <span>
                <img
                  src="/images/circle-mark.svg"
                  alt="rating image"
                  className="ml-1"
                />
              </span>
            </p>
            <p className="font-public-sans text-[#00000099] text-[11.937px] font-normal mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              condimentum facilisis risus eu vulputate. Sed consectetur
              tristique diam a posuere. Donec aliquam interdum sollicitudin.
              Integer porttitor massa sapien, tincidunt
            </p>
            <p className="font-public-sans font-medium text-[#00000099] text-[11.937px]">
              Posted on August 14, 2023
            </p>
          </div>
          <div className="border border-[#00000019] rounded-[15px] py-[20.89px] px-[23.87px]">
            <div className="w-full flex justify-between items-center mb-[11.19px]">
              <img src="/images/rating-star.svg" alt="rating image" />
              <img src="/images/3-dots.svg" alt="rating image" />
            </div>

            <p className="flex items-center font-public-sans text-[14.921px] font-bold text-black mb-[8.95px]">
              Pinnacle shoe shop
              <span>
                <img
                  src="/images/circle-mark.svg"
                  alt="rating image"
                  className="ml-1"
                />
              </span>
            </p>
            <p className="font-public-sans text-[#00000099] text-[11.937px] font-normal mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              condimentum facilisis risus eu vulputate. Sed consectetur
              tristique diam a posuere. Donec aliquam interdum sollicitudin.
              Integer porttitor massa sapien, tincidunt
            </p>
            <p className="font-public-sans font-medium text-[#00000099] text-[11.937px]">
              Posted on August 14, 2023
            </p>
          </div>
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default ReviewsComponent;
