import React from 'react'
import Filter from '../../Core/Filter'
import AllCategories from './Allcategories'
import MerchantsAllCategories from './MerchantsAllcategories'

const Body = () => {
  return (
    <div className='flex flex-row mx-12 my-10 gap-10 xs:mx-0'>
      <Filter />
      <AllCategories styles={'text-black bg-white'} title={'All'} />
    </div>
  )
}

export default Body