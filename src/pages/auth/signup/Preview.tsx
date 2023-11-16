import React, { MouseEventHandler } from 'react'
import { ISignUp } from "./signup.type";


interface Props {
    formData: ISignUp;
    previous: MouseEventHandler<HTMLButtonElement>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;

}

const Preview = ({ formData, previous, handleSubmit }: Props) => {
    return (
        <>
            <div className="flex relative justify-center flex-col gap-7 items-center w-full">
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Shop name :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.shop_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Seller type :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.seller_type}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Account manager’s first name:</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.first_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Account manager’s last name:</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.last_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Account phone number:</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.phone}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Email address :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.email}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Legal representative First Name :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.rep_first_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Legal representative middle Name :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.rep_middle_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Legal representative last Name :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.rep_last_name}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Company address :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.address}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Postal code :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.postal_code}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Company phone number :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.company_phone}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Additional phone number :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.other_phone}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>CAC registration number :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.cac_number}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Tax Identification number :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.tax_number}</span>
                </div>
                <div className="flex justify-center items-center w-[60%] gap-4">
                    <span className='text-sm text-left w-[40%] text-[#B3B7BB]'>Shipping country :</span>
                    <span className='w-[60%] text-xl text-left font-bold'>{formData?.shipping_address}</span>
                </div>

                <div className="flex gap-4  w-[60%] flex-col">
                    <span className='w-[60%] text-xl text-[#B3B7BB] text-left italic'>{formData?.cac_document}</span>
                    <span className='w-[60%] text-xl text-[#B3B7BB] text-left italic'>{formData?.tax_document}</span>
                    <span className='w-[60%] text-xl text-[#B3B7BB] text-left italic'>{formData?.id_document}</span>
                </div>

                <div className="flex gap-6 w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] justify-center items-center">
                    <button onClick={previous} className="border-[#D65D5B] border bg-transparent font-bold text-black rounded-2xl  sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] py-3 w-[20%]">Previous</button>
                    <button onClick={handleSubmit} className="bg-[#D65D5B] font-bold text-white rounded-2xl py-3 sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] w-[20%]">Next</button>
                </div>
            </div>
        </>
    )
}

export default Preview