import { Grid, IconButton } from '@mui/material'
import React from 'react'
import { Rating } from '@mui/material'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
    circularProgressClasses,
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Comments from './Comments';

type Props = {}

const SellerEnterprise = (props: Props) => {

    

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#FFD700' : '#FFD700',
        },
    }));

    function FacebookCircularProgress(props: CircularProgressProps) {
        return (
            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={{
                        color: (theme) =>
                            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                    }}
                    size={40}
                    thickness={4}
                    {...props}
                />
            </Box>
        );
    }
    return (
        <>
            <div className='py-3'>
                <div className='w-[90%] mx-auto'>
                    <div className='py-2'>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <div className='py-2 bg-white shadow-lg rounded-[10px]'>
                                    <div className='w-[90%] mx-auto'>
                                        <div className='py-2'>
                                            <p className="font-medium text-[24px]">Review & Rating</p>
                                            <div className='py-2'>
                                                <h2 className="font-medium text-[24px]">4.4/5 Rating</h2>
                                                <div className='py-2 flex items-center space-x-2'>
                                                    <Rating value={5} />
                                                    <p className='text-gray-400'>1425 Rating</p>
                                                </div>
                                                <div className='py-2'>
                                                    <p className='text-gray-400 font-bold'>1212 Global Ratings</p>
                                                </div>
                                                <div className='py-3 space-y-2'>
                                                    <div className='flex items-center space-x-3'>
                                                        <p className='text-gray-400'>5 star</p>
                                                        <BorderLinearProgress style={{width:'30%'}} variant="determinate" value={50} />
                                                        <p className='text-gray-400'>1282</p>
                                                    </div>
                                                    <div className='flex items-center space-x-3'>
                                                        <p className='text-gray-400'>3 star</p>
                                                        <BorderLinearProgress  style={{width:'30%'}}  variant="determinate" value={25} />
                                                        <p className='text-gray-400'>1023</p>
                                                    </div>
                                                    <div className='flex items-center space-x-3'>
                                                        <p className='text-gray-400'>3 star</p>
                                                        <BorderLinearProgress  style={{width:'30%'}}  variant="determinate" value={70} />
                                                        <p className='text-gray-400'>323</p>
                                                    </div>
                                                    <div className='flex items-center space-x-3'>
                                                        <p className='text-gray-400'>2 star</p>
                                                        <BorderLinearProgress  style={{width:'30%'}}  variant="determinate" value={10} />
                                                        <p className='text-gray-400'>673</p>
                                                    </div>
                                                    <div className='flex items-center space-x-3'>
                                                        <p className='text-gray-400'>5 star</p>
                                                        <BorderLinearProgress  style={{width:'30%'}}  variant="determinate" value={20} />
                                                        <p className='text-gray-400'>1221</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <div className='py-2 px-4 bg-white shadow-lg rounded-[10px]'>
                                    <div className='py-2 mx-auto'>
                                        <h1 className="font-medium text-[24px]">Comments</h1>
                                        <div className='py-2 px-2 space-y-3'>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <Comments/>
                                            <div className='py-2 flex justify-center items-center'>
                                                <button className='border border-[#E51B48] text-[#E51B48] py-2 px-12  rounded-[10px]'>Load More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SellerEnterprise;