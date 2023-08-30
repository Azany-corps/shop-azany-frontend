import React from "react";

interface ProductItemProps {
  imageUrl: string;
  category: string;
}

const ProductItem = ({ imageUrl, category }: ProductItemProps) => {
  return (
    <div>
      <div className="w-64 flex flex-col p-4 gap-4 bg-white rounded-lg">
        <div className="h-140">
          <img src={imageUrl} alt="product" className=" object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-medium text-lg">{category}</p>
            <p className="text-red-600">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
