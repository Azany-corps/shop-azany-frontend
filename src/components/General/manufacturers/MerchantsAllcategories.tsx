import React, { useEffect, useState } from "react";
import ProductI from "./ProductI";
import callAPI from "../../../api/callApi";

interface MerchantsAllCategoriesProps {
  styles: string;
  title: string;
}

interface Store {
  id: number;
  store_name: string;
  logo_url: string;
  banner_url: string;
  store_category: string;
  city: string;
  state: string;
  country: string;
  num_of_products: number;
  num_of_orders: number;
}

const MerchantsAllCategories = ({ styles, title }: MerchantsAllCategoriesProps) => {
  const [stores, setStores] = useState<Store[]>([]);


  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await callAPI(`general/products/fetch_merchant_store/0/4`, "GET", null);
        setStores(response.data?.values);
        console.log(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStores();
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 xs:mx-4">
      <div className={`${styles}  px-8 py-4 flex justify-between rounded-lg`}>
        <p className="font-medium text-lg">{title}</p>
        <p className="xs:hidden">Sort by: Popularity</p>
      </div>
      <div className="grid grid-cols-4 xs:grid-cols-2 gap-4">
        {stores.map((store) => (
          <ProductI key={store.id} data={store} />
        ))}
      </div>
    </div>
  );
};

export default MerchantsAllCategories;
