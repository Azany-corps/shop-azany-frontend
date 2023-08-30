import { Grid } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
type Props = {
  storeDetail?:any;
};

const SellerAbout = ({ storeDetail }: Props) => {
  return (
    <>
      <div className="py-3">
        <div className="w-[90%] mx-auto">
          <div className="py-4">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <div className="bg-white py-3 px-4 shadow-lg rounded-md">
                  <div>
                    <h2 className="font-medium text-[24px]">Stats</h2>
                    <div className="py-2 px-2">
                      <div className="bg-white shadow-md divide-y-2">
                        <div className="flex flex-col items-start justify-start py-4 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <IconButton>
                              <CheckCircleOutlineIcon />
                            </IconButton>
                            <p className="text-gray-400">Completed Orders</p>
                          </div>
                          <h1 className="text-md font-bold ml-2">311</h1>
                        </div>
                        <div className="flex flex-col items-start justify-start py-4 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <IconButton>
                              <AssignmentReturnOutlinedIcon />
                            </IconButton>
                            <p className="text-gray-400">Returned orders</p>
                          </div>
                          <h1 className="text-md ml-2 font-bold">21</h1>
                        </div>
                        <div className="flex flex-col items-start justify-start py-4 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <IconButton>
                              <RateReviewOutlinedIcon />
                            </IconButton>
                            <p className="text-gray-400">Reviews & Rating</p>
                          </div>
                          <h1 className="text-md font-bold ml-2">311</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={8}>
                <div className="bg-white p-4 shadow-lg rounded-md">
                  <div className="py-2">
                    <div className="py-2">
                      <h2 className="font-medium text-[24px]">
                        About {storeDetail?.store_name}
                      </h2>
                    </div>
                    <div>
                      <p>{storeDetail?.about}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 py-2">
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <div className="py-2">
                      <div className="py-2">
                        <h2 className="font-medium text-[24px]">Location</h2>
                      </div>
                      <div className="relative">
                        <img src="/images/location_01.png" className="w-full" />
                        <div className="absolute right-2 bottom-1">
                          <img src="/images/chuks_location.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-2 mt-2">
                  <div className="bg-white p-4 shadow-lg rounded-md">
                    <div className="py-2">
                      <div className="py-2">
                        <h2 className="font-medium text-[24px]">Pictures</h2>
                        <div className="grid grid-cols-6 grid-rows-6 gap-2">
                          <div className="col-span-3 row-span-2">
                            <img src="/images/seller_about (5).png" />
                          </div>
                          <div className="col-span-3 row-span-4">
                            <img
                              src="/images/seller_about (3).png"
                              className="h-full object-cover"
                            />
                          </div>
                          <div className="col-span-3 row-span-3">
                            <img src="/images/seller_about (4).png" />
                          </div>
                          <div className="col-span-3 row-span-1">
                            <img src="/images/seller_about (2).png" />
                          </div>
                          <div className="col-span-3 row-span-1">
                            <img src="/images/seller_about (1).png" />
                          </div>
                          <div className="col-span-3 row-span-1">
                            <img src="/images/seller_about (1).png" />
                          </div>
                        </div>
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
  );
};

export default SellerAbout