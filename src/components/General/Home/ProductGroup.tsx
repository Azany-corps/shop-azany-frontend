import React from 'react'
import ProductCard from './ProductCard'

const ProductGroup = () => {
    return (
        <div className='w-full flex p-6 bg-[#DB4444] rounded-[20px]'>
            <div className="flex flex-col justify-center gap-3 items-center w-1/5 h-full">
                <h2 className='text-white text-center text-3xl'>Home Appliances Under $30</h2>
                <button className='text-xs px-3 bg-white rounded-sm py-1 text-[#DB4444]'>See more</button>
            </div>
            <div className=" w-full grid gap-4 grid-cols-4">
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
                <ProductCard grid={true} textColor={'white'} />
            </div>
        </div>
    )
}

export default ProductGroup