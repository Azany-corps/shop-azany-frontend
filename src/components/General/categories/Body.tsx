import React from "react";
import AllCategories from "./Allcategories";
import Filter from "./Filter";

interface BodyProps {
  category?: string;
  products?: any[];
}

const Body: React.FC<BodyProps> = ({ category, products }) => {

  category= category??""
  return (
    <div className="flex flex-row lgm:mx-12 mdm:mx-6 mx-2 my-10 mdm:gap-10 gap-5">
      <Filter />
      <AllCategories styles={"text-black bg-white "} title={category} products={products} />
    </div>
  );
};

export default Body;
