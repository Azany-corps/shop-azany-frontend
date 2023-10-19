import React from "react";
import ProductItem from "./ProductItem";

interface TrendingProps {
  styles: string;
  title: string;
}

const Trending = ({ styles, title }: TrendingProps) => {
  // Sample data with image URLs and corresponding categories (replace with actual data)
  const products = [
    { imageUrl: "/images/trending.png", category: "Electronics" },
    { imageUrl: "/images/fashion.png", category: "Fashion" },
    { imageUrl: "/images/art.png", category: "Art" },
    { imageUrl: "/images/fitness.png", category: "Sports" },
    { imageUrl: "/images/kids.png", category: "Toys" },
  ];

  return (
    <div className="mx-12 my-10 flex flex-col gap-4 xs:mx-4">
      <div className={`${styles}  px-8 py-4 flex justify-between rounded-lg`}>
        <p className="general-font">{title}</p>
        <p className="general-font">SEE ALL</p>
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            imageUrl={product.imageUrl}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
