import { Rating } from "@mui/material";
import React from "react";
import Category from "../General/categories/Category";
import ProductI from "../General/categories/ProductI";
import { products } from "./product";

const SellerHome = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="py-3">
        <div className="w-[90%] bg-white shadow-md mx-auto p-4 rounded-md">
          <div className="py-2">
            <h1 className="font-medium text-[24px]">Featured Products</h1>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <img src="/images/img_111.png" className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div>
                <img src="/images/img_222.png" className="object-cover" />
              </div>
              <div>
                <img src="/images/img_333.png" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4">
        <Category
          styles={"text-black bg-[#ECF39E] font-medium text-lg"}
          title={"Best Selling"}
          country={"country"}
        />
        <div className="flex flex-row mx-12 gap-4 bg-white my-10">
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
        </div>
        <div className="flex flex-row mx-12 gap-4 bg-white my-10">
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
        </div>
        <div className="flex flex-row mx-12 gap-4 bg-white my-10">
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          />{" "} */}
          {/* <ProductI
            image={"/images/candle.png"}
            name="Lumber Timber"
            price={200}
            // key={1}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SellerHome;
