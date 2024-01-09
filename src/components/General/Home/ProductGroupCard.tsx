import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import ProductCard from './ProductCard'

interface Props {
    title?: string;
    showSlider?: boolean;
    products: any
    flex?: boolean
}
const ProductGroupCard = ({ title, products, flex = true, showSlider = true }: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    const handlePrev = () => {
        console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 2));
    };

    const handleNext = () => {
        console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex < products.length - 2 ? prevIndex + 1 : 0));
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * (100 / products.length)}%)`,
        transition: 'transform 0.5s ease-in-out',
        width: `${products.length * (100 / 1)}%`,
    };
    return (
        <div className='bg-white w-full flex gap-4 flex-col p-6 pb-8 rounded-[20px]'>
            <div className="flex justify-between items-center px-1">
                {title && <h2 className='font-bold text-xl'>{title}</h2>}

                {
                    showSlider && (
                        <div className="flex gap-1">
                            <span onClick={handlePrev} className='rounded-full shadow-sm hover:cursor-pointer p-2 bg-[#F5F5F5]'>
                                <Icon icon="tabler:arrow-left" width="24" />
                            </span>
                            <span onClick={handleNext} className='p-2 rounded-full shadow-sm hover:cursor-pointer bg-[#F5F5F5]'>
                                <Icon icon="tabler:arrow-right" width="24" />
                            </span>
                        </div>
                    )
                }
            </div>
            <div className={`${flex ? 'flex overflow-x-auto no-scrollbar items-center justify-between' : 'grid md:grid-cols-4 gap-x-4 gap-y-4 grid-cols-2 lg:grid-cols-6'} gap-4 w-full overflow-hidden`}>
                {
                    showSlider ? (
                        <>
                            <div style={slideStyle} className="flex justify-between gap-4">
                                {
                                    products.map((product: any, index: number) => (
                                        <ProductCard product={product} key={index} />
                                    ))
                                }
                            </div>
                            <div style={slideStyle} className="flex justify-between gap-4">
                                {
                                    products.map((product: any, index: number) => (
                                        <ProductCard product={product} key={index} />
                                    ))
                                }
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                products.map((product: any, index: number) => (
                                    <ProductCard showPrice={true} grid={true} product={product} key={index} />
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ProductGroupCard