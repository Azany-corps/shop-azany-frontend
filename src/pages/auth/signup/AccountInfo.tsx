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
            <form className="md:w-[60%] w-[90%] flex flex-col items-center md:gap-8 gap-4" onSubmit={handleSubmit} action="">
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        placeholder="Account number"
                        required={isRequired}
                        onChange={handleChange}
                        name="account_name"
                        value={formData.account_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
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

                <div className="flex gap-6 md:w-[60%] w-[90%] justify-center items-center">
                    <button onClick={previous} className="border-[#D65D5B] border bg-transparent font-bold text-black rounded-2xl md:text-base text-xs py-2 w-[40%] md:py-3 md:w-[30%]">Previous</button>
                    <button className="bg-[#B3B7BB] font-bold text-white rounded-2xl md:text-base text-xs py-2 w-[40%] md:py-3 md:w-[30%]">Skip</button>
                    <button className="bg-[#D65D5B] font-bold text-white rounded-2xl md:text-base text-xs py-2 w-[40%] md:py-3 md:w-[30%]">Next</button>
                </div>
            </form>
        </>
    )
}

export default AccountInfo