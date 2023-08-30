import React from "react";
import { Icon } from "@iconify/react";

interface StoreData {
  data: {
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
  };
}

const ProductI = ({ data }: StoreData) => {
  return (
    <div>
      <div className="w-50 xs:w-44 flex flex-col p-4 gap-4 bg-white rounded-lg">
        <div className="relative">
          <img src={data.banner_url ? data.banner_url : "/images/candle.png"} alt="product" />
          <div className="absolute bottom-0 left-0 transform translate-x-[20%] translate-y-[50%]">
            <img src={data.logo_url ? data.logo_url : "/images/manufacturerslogo.png"} alt="manufacturerslogo" className="relative w-10 h-10" />
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div>
            <p className="font-medium text-lg">{data.store_name}</p>
          </div>
          <div className="flex flex-initial gap-2">
            <Icon icon="material-symbols:location-on-rounded" width="16" height="16" />
            <p className="font-medium text-base">
              {data.city}, {data.country}
            </p>
          </div>
        </div>
        <div className="inline-block text-left"></div>
      </div>
    </div>
  );
};

export default ProductI;
