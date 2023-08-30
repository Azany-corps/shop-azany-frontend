import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";


interface StoreData {
  data: {
    id: number;
    store_name: string;
    country: string;
    state: string;
    city: string;
  };
}

const ProductSingle = ({ data }: StoreData) => {
  return (
    <div>
      <div className="w-64 xs:w-40 flex flex-col p-4 gap-2 bg-white rounded-lg cursor-pointe">
        <Link to="/products">
          <div>
            <img src="/images/azanytopseller.png" alt="product" className="rounded-lg object-contain h-40 w-40"/>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-medium text-lg">{data.store_name}</p>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="material-symbols:location-on-rounded" />
                <p className="font-medium text-[14px]">{`${data.state},  ${data.country}`}</p>
              </div>
            </div>
            <div className="inline-block text-left">
              <p>$99.95</p>
              <p>$112.94 shipping</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductSingle;
