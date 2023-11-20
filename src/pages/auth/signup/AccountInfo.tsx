import React, { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react'
import { ISignUp } from "./signup.type";
import { Icon } from '@iconify/react';


interface Props {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    previous: MouseEventHandler<HTMLButtonElement>;
    formData: ISignUp
}

const AccountInfo = ({ handleChange, handleSubmit, previous, formData }: Props) => {
    const [isRequired, setIsRequired] = useState<boolean>(true);
    //fix skip functionality
    // const skip = async (event: React.FormEvent<HTMLFormElement>) => {
    //     setIsRequired(false);
    //     handleSubmit(event);
    // }
    return (
        <>
            <form className="w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] flex justify-between h-[45vh] flex-col items-center gap-10" onSubmit={handleSubmit} action="">
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                        placeholder="Account number"
                        required={isRequired}
                        onChange={handleChange}
                        name="account_name"
                        value={formData.account_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                        placeholder="Account number"
                        required={isRequired}
                        onChange={handleChange}
                        name="account_number"
                        value={formData.account_number}
                        type="text"
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] xs:py-[9px] sm:py-[9px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB]"
                        placeholder="Select bank"
                        required={isRequired}
                        onChange={handleChange}
                        name="bank_name"
                        value={formData.bank_name}
                        type="text"
                    />
                </div>

                <div className="flex gap-6 w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] justify-center items-center">
                    <button onClick={previous} className="border-[#D65D5B] border bg-transparent font-bold text-black rounded-2xl  sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] py-3 w-[30%]">Previous</button>
                    <button className="bg-[#B3B7BB] font-bold text-white rounded-2xl sm:text-xs xs:text-xs sm:py-2 xs:py-2  py-3 sm:w-[40%] xs:w-[40%] w-[30%]">Skip</button>
                    <button className="bg-[#D65D5B] font-bold text-white rounded-2xl py-3 sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] w-[30%]">Next</button>
                </div>
            </form>
        </>
    )
}

export default AccountInfo