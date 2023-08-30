import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface BannerProps {
  style: string;
  styles: string;
  image: string;
}

const Banner = ({ style, styles, image }: BannerProps) => {
  return (
    <div>
      <div className="flex-row gap-2 p-2 w-[90%] xs:hidden flex mx-auto items-center ">
        <p>Home</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p>{`${style}`}</p>
        <ArrowForwardIosIcon fontSize="small" />
        <p className="text-gray-700">{`${styles}`}</p>
      </div>
      <div
        className="xs:hidden h-[320px] bg-cover w-full bg-center"
        style={{
          backgroundImage: `url(${
            image ||
            "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          })`,
        }}
      ></div>
      <div>
        <img
          src={`${
            image ||
            "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          }`}
          alt="banner"
          className="md:hidden lg:hidden xl:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
