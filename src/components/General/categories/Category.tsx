import React, { useEffect, useState } from "react";
import ProductI from "./ProductI";
import callAPI from "../../../api/callApi";
import { toast } from "react-toastify";

interface CategoriesProps {
  styles: string;
  title: string;
  country: string;
  products?: any[];
}

const Category = ({ styles, title, products, country }: CategoriesProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); //
  interface Product {
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
  }

  useEffect(() => {
    if (country) {
      const fetchProducts = async () => {
        try {
          setIsLoading(true);
          const response = await callAPI(`general/products/list_new_farm_product/${country}`, "GET", null);
          setProduct(response.data?.values);
          console.log(response.data?.values);
        } catch (error) {
          console.error(error);
          setProduct([]); 
        } finally {
          setIsLoading(false);
        }
      };
      fetchProducts();
    } else {
      setProduct([]); 
    }
  }, [country]);

  return (
    <div className="mx-12 my-10 xs:mx-2">
    <div className={`${styles} px-8 xs:text-sm xs:px-4 py-4 flex justify-between rounded-tl-lg rounded-tr-lg`}>
      <p className="">{title}</p>
    </div>
    <div className="flex overflow-x-scroll flex-row gap-4 py-4 items-center bg-white ">
      {product.length > 0 ? (
        product.map((products) => <ProductI key={products.id} data={products} />)
      ) : isLoading ? (
        <p>...Loading Products</p>
      ) : (
        <p>No products available for {country}</p>
      )}
    </div>
  </div>
  
  );
};

export default Category;
