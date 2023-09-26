import React from "react";
import image1 from "../../../assets/testimonial.png";
import { Icon } from "@iconify/react";

const TestimonialSOA = () => {
  return (
    <div className="flex w-[90%] mb-6 mx-auto xs:w-full flex-col p-6 gap-10 bg-[white] rounded-md">
      <div>
        <p className="font-bold text-2xl">Samsung LTD</p>
      </div>
      <div>
        <p className="text-2xl italic">
          "Working with Azany has been a game-changer for our manufacturing business. The B2B e-commerce platform has not only expanded our reach but
          has also streamlined our operations in ways we couldn't have imagined. With Azany, we've seamlessly connected with a network of global
          buyers, allowing us to showcase our products to a diverse audience.”
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img src={image1} alt="" />
          <div>
            <p className="font-bold">Thomas Tuchel</p>
            <p>Co-Founder</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className="bg-[#DFDFDF] p-2">
            <Icon icon="mingcute:left-line" width="10" height="10" />
          </button>
          <button className="bg-[#DFDFDF] p-2">
            <Icon icon="mingcute:right-line" width="10" height="10" />
          </button>
        </div>
      </div>
      <div className="flex">

      </div>
    </div>
  );
};

export default TestimonialSOA;
