import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react'
import { ISignUp } from "./signup.type";
import { Icon } from '@iconify/react';


interface Props {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleSubmit: FormEventHandler<HTMLFormElement>
    previous: MouseEventHandler<HTMLButtonElement>;
    formData: ISignUp
}

const BusinessInfo = ({ handleChange, handleSubmit, previous, formData }: Props) => {
    return (
        <>
            <form className="w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] flex flex-col items-center gap-10" onSubmit={handleSubmit} action="">
                <div className="flex w-full  justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        placeholder="Business owner/Legal representative First Name"
                        onChange={handleChange}
                        name="rep_first_name"
                        value={formData.rep_first_name}
                        type="text"
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        placeholder="Business owner/Legal representative middle Name"
                        onChange={handleChange}
                        name="rep_middle_name"
                        value={formData.rep_middle_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Business owner/Legal representative last Name"
                        type="text"
                        name="rep_last_name"
                        value={formData.rep_last_name}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        placeholder="Registered company name"
                        onChange={handleChange}
                        name="company_name"
                        value={formData.company_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Company address - country  state,  city,  address"
                        type="text"
                        name="address"
                        value={formData.address}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Postal Code"
                        type="text"
                        name="postal_code"
                        value={formData.postal_code}
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Company phone number"
                        type="text"
                        name="company_phone"
                        value={formData.company_phone}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Additional phone number"
                        type="text"
                        name="other_phone"
                        value={formData.other_phone}
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="CAC registration number"
                        type="text"
                        name="cac_number"
                        value={formData.cac_number}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Tax Identification number"
                        type="text"
                        name="tax_number"
                        value={formData.tax_number}
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Country shipping from"
                        type="text"
                        name="shipping_address"
                        value={formData.shipping_address}
                    />
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                        <input type="file" onChange={handleChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="cac_document" id="" />
                        {
                            formData.cac_document ? (
                                <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{formData.cac_document}</p>
                            ) : (
                                <p className="text-xs text-[#B3B7BB]">Click here to upload CAC  a file</p>
                            )
                        }
                        <Icon icon="basil:file-solid" width="24" height="24" />
                    </div>
                    <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                        <input type="file" onChange={handleChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="tax_document" id="" />
                        {
                            formData.tax_document ? (
                                <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{formData.tax_document}</p>
                            ) : (
                                <p className="text-xs text-[#B3B7BB]">Click here to upload Tax Identification  file</p>
                            )
                        }
                        <Icon icon="basil:file-solid" width="24" height="24" />
                    </div>
                    <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                        <input type="file" onChange={handleChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="id_document" id="" />
                        {
                            formData.id_document ? (
                                <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{formData.id_document}</p>
                            ) : (
                                <p className="text-xs text-[#B3B7BB]">Click here to upload CAC  a file</p>
                            )
                        }
                        <Icon icon="basil:file-solid" width="24" height="24" />
                    </div>
                </div>
                <div className="flex gap-6 w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] justify-center items-center">
                    <button onClick={previous} className="border-[#D65D5B] border bg-transparent font-bold text-black rounded-2xl  sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] py-3 w-[40%]">Previous</button>
                    <button className="bg-[#D65D5B] font-bold text-white rounded-2xl py-3 sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] w-[40%]">Next</button>
                </div>
            </form>
        </>
    )
}

export default BusinessInfo