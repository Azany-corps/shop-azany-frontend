import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import ImgUrl1 from '../../../assets/TOP LEFT (1).png'
import ImgUrl2 from '../../../assets/TOP LEFT (2).png'
import ImgUrl4 from '../../../assets/TOP LEFT (4).png'
import ImgUrl3 from '../../../assets/TOP LEFT (3).png'
import ImgUrl5 from '../../../assets/TOP LEFT (5).png'
import ImgUrl6 from '../../../assets/TOP LEFT (6).png'
import ImgUrl7 from '../../../assets/TOP LEFT (7).png'
import ImgUrl8 from '../../../assets/TOP RIGHT (1).png'
import ImgUrl9 from '../../../assets/TOP RIGHT (2).png'
import ImgUrl10 from '../../../assets/TOP RIGHT (4).png'
import ImgUrl11 from '../../../assets/TOP RIGHT (3).png'
import ImgUrl12 from '../../../assets/TOP RIGHT (5).png'
import ImgUrl13 from '../../../assets/TOP RIGHT (6).png'
import ImgUrl14 from '../../../assets/TOP RIGHT (7).png'




const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const images = [
        ImgUrl1,
        ImgUrl2,
        ImgUrl4,
        ImgUrl3,
        ImgUrl5,
        ImgUrl6,
        ImgUrl7,
        ImgUrl8,
        ImgUrl9,
        ImgUrl10,
        ImgUrl11,
        ImgUrl12,
        ImgUrl13,
        ImgUrl14
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
        <div className='h-[500px] w-full relative overflow-hidden rounded-[20px]'>
            <img className='object-cover w-full h-full' src={images[currentIndex]} alt="" />
            <div className="flex absolute items-center gap-4 right-4 rounded-full bottom-4 p-4 backdrop-blur-lg">
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