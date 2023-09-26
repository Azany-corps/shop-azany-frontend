import React from 'react'

const CountSOA = () => {
  return (
    <div className='flex w-[90%] mx-auto xs:w-full items-center justify-center p-6'>
      <div className='xs:grid-cols-2 xs:gap-4 xs:grid flex gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-4xl'>500+</p>
          <p className='text-base'>Merchants</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-4xl'>500+</p>
          <p className='text-base'>Countries</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-4xl'>500+</p>
          <p className='text-base'>Products</p>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-4xl'>500+</p>
          <p className='text-base'>Sellers</p>
        </div>

      </div>
    </div>
  )
}

export default CountSOA