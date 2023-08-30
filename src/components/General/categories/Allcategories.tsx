import { Link } from "react-router-dom";
import BasicRating from "../../Core/Rating";
import ProductI from "./ProductI";
interface AllCategoriesProps {
  styles: string;
  title: string;
  products?: any[];
}

const AllCategories = ({ styles, title, products }: AllCategoriesProps) => {
  return (
    <div className="flex flex-col w-full gap-4 smm:mx-auto mx-2">
      <div className={`${styles} px-8 py-4 flex justify-between rounded-lg `}>
        <div className="flex items-center gap-2">
        <p className="font-medium text-lg">{title}</p><span>({products?.length})</span></div>
        <p className="xs:hidden">Sort by: Popularity</p>
      </div>
      <div className="grid grid-cols-2 mdm:grid-cols-2 lgm:grid-cols-3 lgm:gap-6 mdm:gap-4 gap-3">
        {products &&
          products.map((product) => (
            <Link to={`/products/${product.store_id}/${product.id}`}>
              <div className="p-3 pb-4 relative mdm:shadow-md shadow-sm rounded-2xl bg-white flex flex-col gap-2">
                {product.product_discounts?.length > 0 && (
                  <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-red-600 text-white rounded-bl-lg rounded-tr-lg text-sm">
                    <span>{product.product_discounts[0].percentage}% off</span>
                  </div>
                )}
                <img
                  src={product?.image_url}
                  alt=""
                  className="w-[320px] aspect-square object-cover"
                />
                <p>{product?.product_name} </p>
                <div className="flex flex-wrap items-center gap-2">
                  <BasicRating rating={4.5} />
                  <small>1,454 Ratings</small>
                </div>
                <p>
                  {product.currency} {product.price}
                </p>
                <small>$112.94 shipping</small>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllCategories;
