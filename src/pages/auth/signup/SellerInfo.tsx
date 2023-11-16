import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { ISignUp } from "./signup.type";


interface Props {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleSubmit: FormEventHandler<HTMLFormElement>
    formData: ISignUp
}

const SellerInfo = ({ handleChange, handleSubmit, formData }: Props) => {
    return (
        <>
            <form className="w-[60%] md:w-[90%] sm:w-[90%] xs:w-[90%] flex flex-col items-center gap-10" onSubmit={handleSubmit} action="">
                <div className="flex w-full  justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]" placeholder="shop name"
                        onChange={handleChange}
                        name="shop_name"
                        value={formData.shop_name}
                        type="text"
                    />
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none py-[15px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="seller_type"
                        id=""
                    >
                        <option value="">seller type</option>
                    </select>
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="Account manager’s first name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                    />
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none py-[15px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="account_type"
                        id=""
                    >
                        <option value="">Account type</option>
                    </select>
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="Account manager’s last name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="Account phone number"
                        type="phone"
                        name="phone"
                        value={formData.phone}
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="password"
                        type="password"
                        name="password"
                        value={formData.password}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="retype password"
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                    />
                </div>
                <div className="flex w-full justify-between gap-10">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] xs:py-[9px] sm:py-[9px]"
                        onChange={handleChange}
                        placeholder="Email password"
                        type="email"
                        name="email"
                        value={formData.email}
                    />
                </div>
                <button className="bg-[#D65D5B] font-bold text-white rounded-2xl py-3 px-11 sm:text-xs xs:text-xs sm:py-2 xs:py-2 sm:w-[40%] xs:w-[40%] w-[20%]">Next</button>
            </form>
        </>
    )
}

export default SellerInfo