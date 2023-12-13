import React from 'react'
import { Icon } from '@iconify/react';
import ProductCard from './ProductCard'

interface Props {
    title: string
}
const ProductGroupFlex = ({ title }: Props) => {
    return (
        <div className='bg-white w-full flex gap-4 flex-col p-6 pb-8 rounded-[20px]'>
            <div className="flex justify-between items-center px-1">
                <h2 className='font-bold text-xl'>{title}</h2>
                <div className="flex gap-1">
                    <span className='rounded-full shadow-sm p-2 bg-[#F5F5F5]'>
                        <Icon icon="tabler:arrow-left" width="24" />
                    </span>
                    <span className='p-2 rounded-full shadow-sm bg-[#F5F5F5]'>
                        <Icon icon="tabler:arrow-right" width="24" />
                    </span>
                </div>
            </div>
            <div className="flex justify-between gap-4 overflow-hidden">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductGroupFlex