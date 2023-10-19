import React, { useEffect, useState } from "react";
import ProductSingle from "./ProductSingle";
import callAPI from "../../../api/callApi";
import { Icon } from "@iconify/react";

interface CategoriessProps {
  styles: string;
  title: string;
  country: string;
}

const Categoriess = ({ styles, title, country }: CategoriessProps) => {
  const [store, setStore] = useState<Store[]>([]);
  const [isLoading, setIsLoading] = useState(true); // add isLoading state variable

  type Store = {
    id: number;
    store_name: string;
    country: string;
    state: string;
    city: string;
  };

  useEffect(() => {
    if (country) {
      const fetchStore = async () => {
        try {
          setIsLoading(true);
          const response = await callAPI(
            `general/products/list_top_seller/${country}`,
            "GET",
            null
          );
          setStore(response.data?.values);
          console.log(response.data?.values);
        } catch (error) {
          console.error(error);
          setIsLoading(false);
          setStore([]); // remove the products from UI
        }
      };
      fetchStore();
    }
  }, [country]);

  return (
    <div className="mx-12 my-10 xs:mx-4">
      <div
        className={`${styles} px-8 xs:text-sm xs:px-4 py-4 flex justify-between rounded-tl-lg rounded-tr-lg`}
      >
        <p className="general-font">{title}</p>
        <p className="general-font">SEE ALL</p>
      </div>
      <div className="flex overflow-x-scroll flex-row gap-4 bg-white">
        {store.length > 0 ? (
          store.map((stores) => <ProductSingle key={stores.id} data={stores} />)
        ) : isLoading ? (
          <p>...Loading Products</p>
        ) : (
          <p>No products available for {country}</p>
        )}
      </div>
    </div>
  );
};

export default Categoriess;
