import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';

interface Props {
    items: any
    prev: Function;
    next: Function;
}

const Slider = ({ items }: Props) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const myDivRef = useRef<HTMLDivElement | null>(null);
    const [divWidth, setDivWidth] = useState<number>(0)


    const handlePrev = () => {
        console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 2));
    };

    const handleNext = () => {
        console.log(currentIndex)
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 2 ? prevIndex + 1 : 0));
    };

    const slideStyle = {
        transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
        transition: 'transform 0.5s ease-in-out',
        width: `${items.length * (100 / 6)}%`,
    };

    return (
        <div className='w-full flex gap-4 md:gap-10 items-center justify-between'>
            <span onClick={handlePrev} className=' z-10 rounded-full hover:cursor-pointer shadow-sm p-2 bg-[#F5F5F5]'>
                <Icon icon="tabler:arrow-left" width="24" />
            </span>
            <div className="overflow-hidden">
                <div className="w-full flex gap-6">
                    <div className={`flex gap-6 justify-start items-center`} style={slideStyle}>
                        {
                            items.map((text: string, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-5 justify-between">
                                    <div className="rounded-full border border-[#DB4444] bg-white w-[74px] h-[74px]"></div>
                                    <span>{text}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`flex gap-6 justify-start items-center`} style={slideStyle}>
                        {
                            items.map((text: string, index: number) => (
                                <div key={index} className="flex flex-col items-center gap-5 justify-between">
                                    <div className="rounded-full border border-[#DB4444] bg-white w-[74px] h-[74px]"></div>
                                    <span>{text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <span onClick={handleNext} className='p-2 z-10 hover:cursor-pointer rounded-full shadow-sm bg-[#F5F5F5]'>
                <Icon icon="tabler:arrow-right" width="24" />
            </span>
        </div>
    )
}

export default Slider