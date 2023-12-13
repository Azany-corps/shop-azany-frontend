import React from 'react'
import { Icon } from '@iconify/react';
import ImgUrl from '../../../assets/katie-goertzen-6oAWnDGR4JY-unsplash.jpg'

const Hero = () => {
    return (
        <div className='h-[380px] w-full relative overflow-hidden rounded-[20px]'>
            <img className='object-cover w-full h-full' src={ImgUrl} alt="" />
            <div className="flex absolute items-center gap-4 justify-end px-10 bottom-0 w-full h-24 backdrop-blur-lg">
                <div className="flex items-center gap-3 px-1 py-1 rounded-full bg-black/40">
                    <Icon icon="icon-park-outline:left" color="white" width="24" />
                    <Icon icon="icon-park-outline:right" color="white" width="24" />
                </div>
                <div className="flex items-center text-sm px-1 py-1 rounded-full bg-black/40">
                    <span className='text-white'>1/8</span>
                </div>
                <div className="flex items-center px-1 py-1 rounded-full bg-black/40">
                    <Icon icon="ri:pause-fill" color="white" width="24" />
                </div>
            </div>
        </div>
    )
}

export default Hero