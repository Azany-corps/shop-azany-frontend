import React, { useState, useEffect } from "react";
import CustomerProfileLayout from "../../components/CustomerProfile/NewCustomerProfileLayout";
import callAPI from "../../api/callApi";

interface SavedItemsProps {}

interface ISaved {
  // order_code: string;
  // created_at: string;
  // address: string;
  // order_status: string;
  // sub_total: number;
  // id: number;
  // quantity: number;
}

const SavedItemsComponent: React.FC<SavedItemsProps> = () => {
  const [savedItems, setSavedItems] = useState<Array<ISaved>>([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getSavedItems = async () => {
      const headers = { Authorization: `Bearer ${token}` };
      try {
        const response = await callAPI(
          `product/fetch_saved_items`,
          "GET",
          null,
          headers
        );
        console.log(response.data.values);
        setSavedItems(response.data.values);
        return response.data.values;
      } catch (err) {
        console.log(err);
      }
    };

    // getSavedItems();
  }, []);

  console.log(savedItems);

  return (
    <div className="w-full h-screen bg-white">
      <CustomerProfileLayout>
        <div className="pt-[80px] font-public-sans w-full">
          {savedItems?.length > 0 && (
            <>
              <p className="capitalize text-xl font-semibold font-baloo">
                Recently viewed
              </p>
              <p className="text-xl font-baloo font-normal text-[#B3B7BB]">
                Revisit all the product you have viewed recently
              </p>
            </>
          )}
          {savedItems?.length == 0 && (
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

export default SavedItemsComponent;
