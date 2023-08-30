import { IconButton, Rating } from '@mui/material'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
type Props = {}

const Comments = (props: Props) => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h2 className="font-medium text-[18px]">JUAN MATA</h2>
                <div className='flex items-center space-x-1'>
                    <IconButton>
                        <ThumbUpAltOutlinedIcon className='text-blue-500' />
                    </IconButton>
                    <p className='text-blue-500'>Verified Comment</p>
                </div>
            </div>
            <div className='w-full rounded-[10px]'>
                <div className='border border-gray-300 py-6 px-2 rounded-md'>
                    <p className='text-[#515151]'>sit amet consectetur. Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consec</p>
                </div>
            </div>
            <div className=''>
                <div className='flex items-center space-x-2'>
                    <div className='flex space-x-2 items-center'>
                        <AccessTimeOutlinedIcon />
                        <p>22-03-2023</p>
                    </div>
                    <Rating value={4} />
                </div>

            </div>
        </>
    )
}

export default Comments