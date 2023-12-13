import React, { useState } from 'react'
import { Icon } from '@iconify/react';


const CategorySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'Electronic',
        'Clothing',
        'Housing',
        'Educational',
        'Electronic',
        'Clothing',
        'Housing',
        'Educational',
        'Electronic',
        'Clothing',
        'Housing',
        'Educational',
        'Electronic',
        'Clothing',
        'Housing',
        'Educational',
    ]


    const handlePrev = () => {
        setCurrentIndex((prevIndex: any) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex: any) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
        width: `${images.length * 100}%`,
    };
    return (
        <div className='w-full flex gap-10 items-center justify-between'>
            <span onClick={handlePrev} className='rounded-full hover:cursor-pointer shadow-sm p-2 bg-[#F5F5F5]'>
                <Icon icon="tabler:arrow-left" width="24" />
            </span>
            <div className="overflow-hidden">
                <div className="flex gap-6 justify-start w-full items-center" style={slideStyle}>
                    {
                        images.map((text: string, index: number) => (
                            <div key={index} className="flex flex-col items-center gap-5 justify-between">
                                <div className="rounded-full border border-[#DB4444] bg-white w-[74px] h-[74px]"></div>
                                <span>{text}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <span onClick={handlePrev} className='p-2 hover:cursor-pointer rounded-full shadow-sm bg-[#F5F5F5]'>
                <Icon icon="tabler:arrow-right" width="24" />
            </span>
        </div>
    )
}

export default CategorySlider