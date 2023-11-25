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
            <form className="md:w-[60%] w-[90%] flex flex-col items-center md:gap-8 gap-4" onSubmit={handleSubmit} action="">
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        placeholder="shop name"
                        onChange={handleChange}
                        name="shop_name"
                        value={formData.shop_name}
                        type="text"
                    />
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="seller_type"
                        id=""
                    >
                        <option value="">seller type</option>
                    </select>
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Account manager’s first name"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                    />
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="account_type"
                        id=""
                    >
                        <option value="">Account type</option>
                    </select>
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Account manager’s last name"
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Account phone number"
                        type="phone"
                        name="phone"
                        value={formData.phone}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="password"
                        type="password"
                        name="password"
                        value={formData.password}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="retype password"
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Enter Email"
                        type="email"
                        name="email"
                        value={formData.email}
                    />
                </div>
                <button className="bg-[#D65D5B] font-bold text-white rounded-2xl md:py-3 px-11 md:text-base text-xs py-2 w-[40%] md:w-[30%]">Next</button>
            </form>
        </>
    )
}

export default SellerInfo