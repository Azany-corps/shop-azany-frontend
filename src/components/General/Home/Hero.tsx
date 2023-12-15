import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import ImgUrl1 from '../../../assets/katie-goertzen-6oAWnDGR4JY-unsplash.jpg'
import ImgUrl2 from '../../../assets/Rectangle 4275.png'
import ImgUrl3 from '../../../assets/Reward.png'



const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const images = [
        ImgUrl1,
        ImgUrl2,
        ImgUrl3
    ]

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isPlaying) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 4000);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying, currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const playPause = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };

    return (
        <div className='h-[380px] w-full relative overflow-hidden rounded-[20px]'>
            { }
            <img className='object-cover w-full h-full' src={images[currentIndex]} alt="" />
            <div className="flex absolute items-center gap-4 justify-end px-10 bottom-0 w-full h-24 backdrop-blur-lg">
                <div className="flex items-center gap-3 px-1 py-1 rounded-full bg-black/40">
                    <span onClick={prevSlide}>
                        <Icon icon="icon-park-outline:left" color="white" width="24" />
                    </span>
                    <span onClick={nextSlide}>
                        <Icon icon="icon-park-outline:right" color="white" width="24" />
                    </span>
                </div>
                <div className="flex items-center text-sm px-2 py-2 rounded-full bg-black/40">
                    <span className='text-white'>{currentIndex + 1 + '/' + images.length}</span>
                </div>
                <div onClick={playPause} className="flex hover:cursor-pointer items-center px-1 py-1 rounded-full bg-black/40">
                    {isPlaying ? <Icon icon="ri:pause-fill" color="white" width="24" /> : <Icon icon="solar:play-linear" color="white" width={24} />}
                </div>
            </div>
        </div>
    )
}

export default Hero