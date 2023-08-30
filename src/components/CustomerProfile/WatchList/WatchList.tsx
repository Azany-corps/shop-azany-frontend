import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import VisibilityIcon from '@mui/icons-material/Visibility';
type Props = {}

const WatchListed = (props: Props) => {
    return (
        <div className='py-3'>
            <div className=''>
                <div className='space-y-2'>
                    <img src='/images/watchlist_001.png' className='w-full' />
                    <div className='flex items-center justify-between '>
                        <h2 className='font-bold text-[15px]'>Pristine Steel (30inch) </h2>
                        <div className='self-end justify-end place-self-end'>
                            <IconButton>
                                <DeleteIcon className='text-[#E51B48]' />
                            </IconButton>
                        </div>

                    </div>
                    <div className=''>
                        <div className='flex flex-col space-x-2'>
                            <Rating name="read-only" value={4} readOnly />
                            <p className='text-[#515151]'>1453 Ratings</p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-[20px] font-[400px]'>$99.95</h1>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2>$112.94 shipping</h2>
                        <div className='flex items-center space-x-1'>
                            <IconButton>
                                <VisibilityIcon />
                            </IconButton>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchListed