import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

interface ProductData {
  data: {
    id: number;
    image_url: string;
    price: string;
    country: string;
    state: string;
    currency: string;
    product_description: string;
    product_name: string;
    store_id: string;
    product_discounts: {
      id: number;
      quantity: string;
      percentage: string;
      currency: string;
      discount_price: string;
      product_id: number;
      created_at: string;
      updated_at: string;
    }[];
  };
}

const Product = ({ data }: ProductData) => {
  return (
    <div className="w-64 xs:w-40">
      <Link to={`/products/${data.store_id}/${data.id}`}>
        <div className="flex flex-col px-4 bg-white rounded-lg cursor-pointer">
          <div className="relative">
            {data.product_discounts.length > 0 && (
              <div className="absolute top-0 left-0 z-10 px-2 py-1 bg-red-600 text-white rounded-bl-lg rounded-tr-lg text-sm">
                <span>{data.product_discounts[0].percentage}% off</span>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center">
            <img src={data.image_url} alt="product" className="rounded-lg object-contain h-40 w-40" />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-medium  w-full whitespace-nowrap overflow-hidden text-lg">{data.product_name}</p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis xs:text-sm">{data.product_description}</p>
            </div>
            <div className="flex flex-row justify-between xs:flex-col">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="material-symbols:location-on-rounded" />
                <p className="font-medium text-sm">{`${data.state}, ${data.country}`}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-medium text-sm">{data.currency}</p>
                <p className="font-medium text-sm">{data.price}</p>
              </div>
            </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
