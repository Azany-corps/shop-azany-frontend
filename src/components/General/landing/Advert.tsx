import React from 'react'

interface AdvertProps {
  src: string
}

const Advert = ({src}: AdvertProps) => {
  return (
    <div className='mx-12 my-10 xs:mx-4'>
      <div>
      <img src={src} alt='advert' />
      </div>
    </div>
  )
}

export default Advert