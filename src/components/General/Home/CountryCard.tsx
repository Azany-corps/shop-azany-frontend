import React from 'react'

interface Props {
    logo: string,
    name: string
}
const CountryCard = ({ logo, name }: Props) => {
    return (
        <div className='flex items-center bg-white shadow-md rounded-[10px] gap-2 px-3 py-[6px]'>
            <img src={logo} alt="" />
            <span className='text-sm font-medium'>{name}</span>
        </div>
    )
}

export default CountryCard