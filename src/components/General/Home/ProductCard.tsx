import { Height } from '@mui/icons-material'
import React from 'react'

interface ProductCardProps {
    grid?: boolean
    height?: string
    textColor?: string
    product: any
}
const ProductCard = ({ grid = false, textColor, height, product }: ProductCardProps) => {
    return (
        <div className='flex flex-col gap-2 justify-between items-start'>
            <div className={`flex overflow-hidden rounded-md ${grid === true ? `${height ?? 'h-[153px]'} w-full` : 'h-[184px] w-[170px]'}`}>
                <img className='h-full w-full object-cover' src={product.img} alt="" />
            </div>
            <p className={`font-medium ${textColor ? `text-${textColor}` : ''} `}>{product.name}</p>
            {!grid && (
                <p className='flex gap-2 items-center font-medium'>
                    <span className='text-[#DB4444]'>{product.price}</span>
                    <span className='text-gray-400 line-through'>{product.oldPrice}</span>
                </p>
            )}
        </div>
    )
}

export default ProductCard