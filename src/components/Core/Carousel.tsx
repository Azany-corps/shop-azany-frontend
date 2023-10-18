import React, { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  { src: "/images/azanyslide7.png", alt: "Image 1" },
  { src: "/images/azanyslide7.png", alt: "Image 5" },
  { src: "/images/azanyslide7.png", alt: "Image 2" },
  { src: "/images/azanyslide7.png", alt: "Image 6" },
  { src: "/images/azanyslide7.png", alt: "Image 4" },
];

const Carousel: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // added autoplay property
    autoplaySpeed: 3000, // added autoplaySpeed property (3 seconds)
    //nextArrow: <NextArrow />,
    //prevArrow: <PrevArrow />,
  };

  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div>
        <div
          className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-lg cursor-pointer hover:bg-opacity-100 transition-all duration-300`}
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 stroke-current text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-lg cursor-pointer hover:bg-opacity-100 transition-all duration-300`}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 stroke-current text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  }

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.src}>
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-md"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
