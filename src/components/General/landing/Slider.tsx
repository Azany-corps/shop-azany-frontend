import React from "react";
import styles from "../../../styles/Slider.module.css";
type Props = {};

const Slider = (props: Props) => {
  const products = 
[
  {
    name: "Emeka Enterprise",
    price: "$500/kg",
    imgUrl: "/images/usa.png",
  },
  {
    name: "Victor Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (5).png",
  },
  {
    name: "Favour Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (1).png",
  },
  {
    name: "Victory Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (2).png",
  },
  {
    name: "Michelle Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (3).png",
  },
  {
    name: "Coco Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (4).png",
  },
  {
    name: "Emeka Enterprise",
    price: "$500/kg",
    imgUrl: "/images/usa.png",
  },
  {
    name: "Victor Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (5).png",
  },
  {
    name: "Favour Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (1).png",
  },
  {
    name: "Victory Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (2).png",
  },
  {
    name: "Michelle Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (3).png",
  },
  {
    name: "Coco Enterprise",
    price: "$500/kg",
    imgUrl: "/images/flags (4).png",
  },
];

  return (
    <>
      <div className="overflow-hidden bg-white xs:hidden border-b ">
        <div className="w-[90%] py-2 mx-auto">
          <div className="flex justify-between mb-2">
            <h2 className="font-bold md:font-normal text-[#1B7CFC]">
              Activity Board
            </h2>
            <h2 className="font-bold md:font-normal text-[#1B7CFC]">
              Price Comparison: Choco
            </h2>
          </div>

          <div className="w-[200%] h-16 overflow-hidden relative">
            {/* 2. */}
            <div className="w-[200%] flex items-center h-14 absolute left-0 animate gap-6 animate">
              {/* 3 */}
              {products.map((product) => {
                return (
                  <div className={styles.cards}>
                    <div className="flex justify-center items-start">
                      <div className="flex items-center space-x-2 flex-nowrap shrink-0">
                        <img
                          src={product?.imgUrl}
                          className="h-[25px] object-contain"
                        />
                        <div>
                          <h2 className="font-medium md:font-normal text-sm">
                            {product.price}
                          </h2>
                          <p className="text-gray-400 text-xs whitespace-nowrap">
                            {product?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {products.map((product) => {
                return (
                  <div className={styles.cards}>
                    <div className="flex justify-center items-start">
                      <div className="flex items-center space-x-2 flex-nowrap shrink-0">
                        <img
                          src={product?.imgUrl}
                          className="h-[25px] object-contain"
                        />
                        <div>
                          <h2 className="font-medium md:font-normal text-sm">
                            {product.price}
                          </h2>
                          <p className="text-gray-400 text-xs whitespace-nowrap">
                            {product?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
