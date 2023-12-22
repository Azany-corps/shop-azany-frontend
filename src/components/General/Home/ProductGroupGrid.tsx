import React from 'react'
import { Icon } from '@iconify/react';
import ProductCard from './ProductCard'

interface Props {
    title: string;
    products: any;
}
const ProductGroupGrid = ({ title, products }: Props) => {
    return (
        <div className='bg-white w-full flex justify-between gap-4 flex-col p-6 pb-8 rounded-[20px]'>
            <div className="flex justify-between items-center px-1">
                <h2 className='font-bold text-xl w-2/3'>{title}</h2>
                <div className="flex gap-1">
                    <span className='p-2 rounded-full shadow-sm bg-[#DB4444]'>
                        <Icon icon="icon-park-outline:right" color="white" width="24" />
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 justify-between">
                {
                    products.map((product: any, index: number) => (
                        <ProductCard product={product} grid={true} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductGroupGrid