import { Icon } from "@iconify/react";
import BasicRating from "../../Core/Rating";
import { Link } from "react-router-dom";

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

const ProductI = ({ data }: ProductData) => {
  return (
    <div className="w-[300px]">
      <Link to={`/farmers/products/${data.store_id}/${data.id}`}>
        <div className="flex flex-col px-4 gap-2 bg-white rounded-lg cursor-pointer">
          <div className="relative">
            {data.product_discounts?.length > 0 && (
              <div className="absolute top-0 left-0 z-10 px-2 py-1 bg-red-600 text-white rounded-bl-lg rounded-tr-lg text-sm">
                <span>{data.product_discounts[0].percentage}% off</span>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center w-40 h-40">
            <img src={data?.image_url} alt="product" className="rounded-lg object-contain w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="font-medium text-lg">{data?.product_name}</p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{data?.product_description}</p>
            </div>
            <div className="flex xs:flex-col flex-row justify-between">
              <div className="flex flex-row gap-2 items-center">
                <Icon icon="material-symbols:location-on-rounded" />
                <p className="font-medium text-sm">{`${data?.state}, ${data?.country}`}</p>
              </div>
              <div className="flex flex-row gap-1 items-center">
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

export default ProductI;
