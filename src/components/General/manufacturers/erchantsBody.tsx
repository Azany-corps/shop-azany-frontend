import React from 'react'
import Filter from '../../Core/Filter'
import AllCategories from './Allcategories'
import MerchantsAllCategories from './MerchantsAllcategories'

const MerchantsBody = () => {
  return (
    <div className='flex flex-row mx-12 my-10 gap-10 xs:mx-0'>
      <Filter />
      <MerchantsAllCategories styles={'text-black bg-white'} title={'All'} />
    </div>
  )
}

export default MerchantsBody