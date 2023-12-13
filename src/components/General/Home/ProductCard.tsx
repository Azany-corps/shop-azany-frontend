import { Height } from '@mui/icons-material'
import React from 'react'

interface ProductCardProps {
    grid?: boolean
    height?: string
    textColor?: string
}
const ProductCard = ({ grid = false, textColor, height }: ProductCardProps) => {
    return (
        <div className='flex flex-col gap-2 justify-between items-start'>
            <div className={`flex bg-pink-200 ${grid === true ? `${height ?? 'h-[153px]'} w-full` : 'h-[184px] w-[170px]'}`}></div>
            <p className={`font-medium ${textColor ? `text-${textColor}` : ''} `}>The North Coat</p>
            {!grid && (
                <p className='flex gap-2 items-center font-medium '>
                    <span className='text-[#DB4444]'>$200</span>
                    <span className='text-gray-400 line-through'>$300</span>
                </p>
            )}
        </div>
    )
}

export default ProductCard