import image from "../../../assets/bannerSOA.png"
const BannerSOA = () => {
  return (
    <div className='bg-[#DAFFDA] flex w-[90%] xs:flex-col mx-auto gap-10 p-6 mt-6'>
      <div className='w-1/2 xs:w-full flex flex-col gap-10 xs:gap-4'>
        <p className='text-6xl xs:text-4xl font-bold text-[#132A13]'>
        Start selling as a Farmer with Azany
        </p>
        <div className='w-1/2 xs:w-full'>
        <p className='text-xl xs:text-base'>
        Gaining entry to international trade with merchants spread across the globe.
        </p>

        </div>
        <button className='bg-[#E51B48] w-3/5 text-white px-4 py-2 rounded-md'>Get Started</button>
      </div>
      <div className='w-3/5 xs:w-full'>
        <img src={image} alt="" />

      </div>
      
    </div>
  )
}

export default BannerSOA