import React from 'react'

const BackTop = () => {
  return (
    <div className='flex flex-col bg-[#707070] w-full h-[70px] justify-center items-center cursor-pointer'>
        <button
            onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
              }}
            className='w-full h-[70px] text-white font-[700]'>Back to Top</button>
    </div>
  )
}

export default BackTop