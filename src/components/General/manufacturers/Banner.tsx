import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner = () => {
  return (
    <div>
      <div className="">
        <div className="flex-row gap-2 p-2 w-[90%] flex mx-auto items-center xs:hidden">
          <p>Home</p>
          <ArrowForwardIosIcon fontSize="small" />
          <p className="text-gray-700">Manufacturers</p>
        </div>
        <div className="mx-12 xs:hidden">
          <img src="/images/azanyad3.png" alt="banner" />
        </div>
        <div>
          <img src="/images/azanyad3.png" alt="banner" className='md:hidden lg:hidden xl:hidden'/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
