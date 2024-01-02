import React, { ChangeEvent, ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react'
import { ISignUp } from "./signup.type";
import { Icon } from '@iconify/react';


interface Props {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleSubmit: FormEventHandler<HTMLFormElement>
    previous: MouseEventHandler<HTMLButtonElement>;
    handleSelectChange: ChangeEventHandler<HTMLSelectElement>;
    formData: ISignUp;
    previewUrls: any;
    handleFileChange: any;
    countries: any;
    states: any;
    cities: any;
}


const BusinessInfo = ({ handleChange, handleSubmit, previous, formData, previewUrls, handleFileChange, handleSelectChange, countries, states, cities }: Props) => {
    const [means, setMeans] = useState<string>('')
    const [certificate, setCertificate] = useState<string>('')

    const handleIdentification = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setMeans(value);
        console.log(formData.account_type)
    }

    const handleCertificate = (event: ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setCertificate(value);
    }

    const certificates = [
        {
            name: 'Tax Identification number',
            value: 'tin'
        },
        {
            name: 'CAC document',
            value: 'cac'
        },
    ]

    const meansArr = [
        {
            name: 'NIN Slip',
            value: 'nin'
        },
        {
            name: 'National Voter’s card',
            value: 'voters_card'
        },
        {
            name: 'International Passport',
            value: 'passport'
        },
        {
            name: 'Driver’s licenses',
            value: 'drivers_license'
        }
    ]
    return (
        <>
            <form className="md:w-[60%] w-[90%] flex flex-col items-center md:gap-8 gap-4" onSubmit={handleSubmit} action="">
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        placeholder="Business owner/Legal representative First Name"
                        onChange={handleChange}
                        name="rep_first_name"
                        value={formData.rep_first_name}
                        type="text"
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        placeholder="Business owner/Legal representative middle Name"
                        onChange={handleChange}
                        name="rep_middle_name"
                        value={formData.rep_middle_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Business owner/Legal representative last Name"
                        type="text"
                        name="rep_last_name"
                        value={formData.rep_last_name}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        placeholder="Registered company name"
                        onChange={handleChange}
                        name="company_name"
                        value={formData.company_name}
                        type="text"
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Company phone number"
                        type="text"
                        name="company_phone"
                        value={formData.company_phone}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Additional phone number"
                        type="text"
                        name="other_phone"
                        value={formData.other_phone}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Company address"
                        type="text"
                        name="address"
                        value={formData.address}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Postal Code"
                        type="text"
                        name="postal_code"
                        value={formData.postal_code}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Company address"
                        type="text"
                        name="address"
                        value={formData.address}
                    />
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Postal Code"
                        type="text"
                        name="postal_code"
                        value={formData.postal_code}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="country"
                        id="country"
                        onChange={handleSelectChange}
                    >
                        <option disabled selected>Select Country</option>
                        {
                            countries?.map((country: any) => (
                                <option key={country.id} value={country?.name}>{country?.name}</option>
                            ))
                        }
                    </select>
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="state"
                        id="state"
                        onChange={handleSelectChange}
                    >
                        <option disabled selected>Select State</option>
                        {
                            states?.map((state: any) => (
                                <option key={state.id} value={state?.name}>{state?.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <select
                        className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                        name="city"
                        id="city"
                        onChange={handleSelectChange}
                    >
                        <option disabled selected>Select City</option>
                        {
                            cities?.map((city: any) => (
                                <option key={city.id} value={city?.name}>{city?.name}</option>
                            ))
                        }
                    </select>
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Country shipping from"
                        type="text"
                        name="shipping_address"
                        value={formData.shipping_address}
                    />
                </div>
                <div className="flex w-full flex-col md:flex-row justify-between md:gap-8 gap-4">
                    <input
                        className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                        required
                        onChange={handleChange}
                        placeholder="Country shipping from"
                        type="text"
                        name="shipping_address"
                        value={formData.shipping_address}
                    />
                </div>

                <div className="flex flex-col gap-5 w-full">
                    <div className="flex w-full">
                        <select
                            className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                            name="means"
                            onChange={handleIdentification}
                        >
                            <option disabled selected>Select means of Identification</option>
                            {
                                meansArr?.map((item: any, index: number) => (
                                    <option key={index} value={item.value}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {
                        means === 'nin' && (
                            <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="cac_document" id="" />
                                {
                                    previewUrls.id_document ? (
                                        <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.id_document}</p>
                                    ) : (
                                        <p className="text-xs text-[#B3B7BB]">Click here to upload NIN</p>
                                    )
                                }
                                <Icon icon="basil:file-solid" width="24" height="24" />
                            </div>
                        )
                    }
                    {
                        means === 'voters_card' && (
                            <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="id_document" id="" />
                                {
                                    previewUrls.id_document ? (
                                        <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.id_document}</p>
                                    ) : (
                                        <p className="text-xs text-[#B3B7BB]">Click here to upload Voters Card</p>
                                    )
                                }
                                <Icon icon="basil:file-solid" width="24" height="24" />
                            </div>
                        )
                    }
                    {
                        means === 'passport' && (
                            <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="id_document" id="" />
                                {
                                    previewUrls.id_document ? (
                                        <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.id_document}</p>
                                    ) : (
                                        <p className="text-xs text-[#B3B7BB]">Click here to upload International Passport</p>
                                    )
                                }
                                <Icon icon="basil:file-solid" width="24" height="24" />
                            </div>
                        )
                    }
                    {
                        means === 'drivers_license' && (
                            <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="id_document" id="" />
                                {
                                    previewUrls.id_document ? (
                                        <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.id_document}</p>
                                    ) : (
                                        <p className="text-xs text-[#B3B7BB]">Click here to upload Drivers License</p>
                                    )
                                }
                                <Icon icon="basil:file-solid" width="24" height="24" />
                            </div>
                        )
                    }
                </div>
                {
                    formData.account_type === "Business" && (
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex w-full">
                                <select
                                    className="bg-transparent text-xs w-full px-3 outline-none md:py-[15px] py-[9px] text-[#B3B7BB] text-center border rounded-2xl border-[#B3B7BB]"
                                    name="means"
                                    onChange={handleCertificate}
                                >
                                    <option disabled selected>Select Business Certificate</option>
                                    {
                                        certificates?.map((item: any, index: number) => (
                                            <option key={index} value={item.value}>{item.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                certificate === 'cac' && (
                                    <div className="flex flex-col w-full gap-4">
                                        <input
                                            className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                                            required
                                            onChange={handleChange}
                                            placeholder="CAC registration number"
                                            type="text"
                                            name="cac_number"
                                            value={formData.cac_number}
                                        />
                                        <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                            <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="cac_document" id="" />
                                            {
                                                previewUrls.cac_document ? (
                                                    <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.cac_document}</p>
                                                ) : (
                                                    <p className="text-xs text-[#B3B7BB]">Click here to upload CAC file</p>
                                                )
                                            }
                                            <Icon icon="basil:file-solid" width="24" height="24" />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                certificate === 'tin' && (
                                    <div className="flex flex-col gap-4">
                                        <input
                                            className="bg-transparent text-xs w-full placeholder:text-xs px-3 outline-none md:py-[15px] placeholder:text-[#B3B7BB] placeholder:text-center border rounded-2xl border-[#B3B7BB] py-[9px]"
                                            required
                                            onChange={handleChange}
                                            placeholder="Enter Tax Identification number"
                                            type="text"
                                            name="tax_number"
                                            value={formData.tax_number}
                                        />
                                        <div className="flex relative justify-center items-center py-7 gap-2 bg-[#efefef] rounded-[20px]">
                                            <input type="file" onChange={handleFileChange} className="w-full absolute h-full opacity-0 cursor-pointer bg-transparent border-none outline-none focus:outline-none" name="tax_document" id="" />
                                            {
                                                previewUrls.tax_document ? (
                                                    <p className="text-xs text-[#B3B7BB] overflow-hidden whitespace-normal">{previewUrls.tax_document}</p>
                                                ) : (
                                                    <p className="text-xs text-[#B3B7BB]">Click here to upload Tax Identification Number</p>
                                                )
                                            }
                                            <Icon icon="basil:file-solid" width="24" height="24" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                <div className="flex gap-6 md:w-[60%] w-[90%] justify-center items-center">
                    <button onClick={previous} className="border-[#D65D5B] border bg-transparent font-bold text-black rounded-2xl md:text-base text-xs py-2 w-[40%] md:py-3 md:w-[40%]">Previous</button>
                    <button className="bg-[#D65D5B] font-bold text-white rounded-2xl md:text-base text-xs py-2 w-[40%] md:py-3 md:w-[40%]">Next</button>
                </div>
            </form >
        </>
    )
}

export default BusinessInfo