import React, { useState, useEffect } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import callAPI from "../../api/callApi";
import Loader from "../../components/Core/Loader";

interface RecentlyViewedProps {}

interface IViewed {
  product_name: string;
  price: string;
  // order_code: string;
  // created_at: string;
  // address: string;
  // order_status: string;
  // sub_total: number;
  // id: number;
  // quantity: number;
}

const RecentlyViewedComponent: React.FC<RecentlyViewedProps> = () => {
  const [viewedItems, setViewedItems] = useState<Array<IViewed>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getRecentlyViewed = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        setLoading(true);
        const response = await callAPI(
          "product/fetch_recently_viewed",
          "GET",
          null,
          headers
        );
        // console.log(response.data.values);
        setViewedItems(response.data.values);
        setLoading(false);

        return response.data.values;
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getRecentlyViewed();
  }, []);

  console.log(viewedItems);

  return (
    <div className="w-full h-screen bg-white">
      <CustomerProfileLayout>
        {loading && <Loader />}
        <div className="pt-[80px] font-public-sans w-full">
          {viewedItems?.length > 0 && (
            <>
              <p className="capitalize text-xl font-semibold font-baloo">
                Recently viewed
              </p>
              <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
                Revisit all the product you have viewed recently
              </p>
            </>
          )}
          {viewedItems?.length == 0 && (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <img src="/images/MysteryBox1.svg" />
              <p className="mt-[17px] font-public-sans text-xl font-semibold">
                Nothing here yet, Come back later
              </p>
            </div>
          )}
          {viewedItems?.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[13px] mb-4">
              {viewedItems?.map((item) => (
                <div className="max-w-[227.6px]">
                  <img
                    src="/images/car_image.svg"
                    alt="car image"
                    className="mb-[20px]"
                  />
                  <p className="text-black font-semibold text-[15.428px] mb-2 font-asap">
                    {item?.product_name}
                  </p>
                  <div className="flex items-center mb-2">
                    <img src="/images/saved-items-rating.svg" />
                    <p className="text-[10.799px] font-normal text-black ml-1 font-asap">
                      4<span className="text-[#00000099]">/5</span>
                    </p>
                  </div>
                  <p className="text-black font-bold text-[15.428px] mb-2 font-asap">
                    NGN {item?.price}
                  </p>
                  <p className="text-sm font-semibold text-[#B3B7BB] font-asap mb-5">
                    Order number : <span className="text-black">78376384</span>
                  </p>
                  <div className="flex items-center">
                    <button className="text-white px-2.5 py-2 bg-[#D65D5B] rounded-[16px] cursor-pointer text-[15.428px] font-semibold mr-[41px]">
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CustomerProfileLayout>
    </div>
  );
};

export default RecentlyViewedComponent;
