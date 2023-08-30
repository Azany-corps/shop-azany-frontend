import { Rating } from '@mui/material'
import React from 'react'
import { Product } from '../../dtos/Product.intertace'

type product = Product

const ProductItem = (props: product) => {
    return (
        <div className='p-2 bg-white shadow-lg '>
            <img src={props.image} className='rounded-[10px]' />
            <p>{props.name}</p>
            <div className='py-2 flex space-x-3 items-center'>
                <Rating name="read-only" value={5} readOnly />
                <p>{props.rating} Ratings</p>
            </div>
            <div className='py-2 space-y-1'>
                 <h1>{props.price}</h1>
                 <p>$112 shipping</p>
            </div>
        </div>
    )
}

export default ProductItem;