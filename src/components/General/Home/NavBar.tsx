import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { CategoryModal } from '../../Core/CategoryModal';

const NavBar = () => {
    const [showModal, setShowModal] = React.useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };
    return (
        <div className='relative flex-col items-center justify-between hidden w-full gap-4 px-4 py-2 bg-white md:flex md:flex-row md:px-12'>
            <div onClick={handleOpenModal} className="items-center hover:cursor-pointer hidden gap-2 font-semibold md:flex">
                <Icon icon="ion:menu" width="24" color='black' />
                <span className=''>Categories</span>
            </div>
            <CategoryModal show={showModal} onClose={handleCloseModal} />

            <ul className='flex items-center gap-6 overflow-x-scroll no-scrollbar md:gap-12'>
                <li className='w-full text-sm font-semibold '>Worldwide flex card</li>
                <li className='text-sm font-semibold '>
                    <Link to={"/reward-glo-point"}>RewardGlo</Link>
                </li>
                <li className='text-sm font-semibold '>Multicurrency</li>
                <li className='text-sm font-semibold '>Help</li>
                <li className='text-sm font-semibold '>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
            <div className="relative flex items-center justify-start h-full gap-4">
                <div className="flex items-center gap-1">
                    <svg width="36" height="17" viewBox="0 0 36 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.3958 0.349365H1.6042C0.719702 0.349365 0 1.00229 0 1.80481V15.5031C0 16.3055 0.719702 16.9585 1.6042 16.9585H34.3958C35.2802 16.9585 36 16.3055 36 15.5031V1.80481C36 1.00229 35.2802 0.349365 34.3958 0.349365ZM12.9112 11.7143C12.8498 13.1111 11.5361 14.048 9.64245 14.048C8.39959 14.048 7.25385 13.6391 6.41614 12.8965C6.01424 12.5403 6.00692 11.9562 6.39973 11.5916C6.79213 11.2272 7.43628 11.2204 7.83818 11.5766C8.30003 11.9861 8.92397 12.2025 9.64245 12.2025C9.92662 12.2025 10.8552 12.1621 10.8781 11.6424C10.8888 11.3847 10.5889 11.2323 9.4196 10.9034C8.18894 10.5573 6.32906 10.0342 6.32906 8.17754C6.32906 6.64175 7.70173 5.60989 9.74486 5.60989C10.6456 5.60989 11.496 5.81683 12.2729 6.2248C12.759 6.48021 12.9251 7.04467 12.6433 7.48574C12.3617 7.9268 11.7394 8.07702 11.2532 7.82173C10.7839 7.57518 10.2904 7.45523 9.74486 7.45523C9.32954 7.45523 8.36365 7.5256 8.36365 8.17741C8.36365 8.58132 8.67358 8.76131 10.0222 9.14062C11.2015 9.47255 12.9837 9.97378 12.9112 11.7143ZM21.5008 10.8779H15.5234C15.8755 11.8468 16.7931 12.468 17.991 12.468C18.8575 12.468 19.6149 12.192 20.1238 11.691C20.5046 11.3163 21.1482 11.2925 21.5613 11.6378C21.9745 11.9831 22.0008 12.5669 21.6202 12.9416C20.7215 13.8262 19.4326 14.3134 17.9912 14.3134C15.3354 14.3134 13.3325 12.4398 13.3325 9.9552C13.3325 7.47811 15.3354 5.61014 17.9912 5.61014C20.6143 5.61014 22.5183 7.43751 22.5183 9.9552C22.5181 10.4648 22.0625 10.8779 21.5008 10.8779ZM25.2133 13.3906C25.2133 13.9002 24.7579 14.3133 24.196 14.3133C23.634 14.3133 23.1787 13.9002 23.1787 13.3906V3.54815C23.1787 3.03856 23.634 2.62543 24.196 2.62543C24.7579 2.62543 25.2133 3.03856 25.2133 3.54815V13.3906ZM29.551 13.3906C29.551 13.9002 29.0957 14.3133 28.5337 14.3133C27.9718 14.3133 27.5164 13.9002 27.5164 13.3906V3.54815C27.5164 3.03856 27.9718 2.62543 28.5337 2.62543C29.0957 2.62543 29.551 3.03856 29.551 3.54815V13.3906Z" fill="#DB4444" />
                    </svg>
                    <Link to={'/sell-on-azany'}>
                        <span className='font-semibold'>Become a Seller</span>
                    </Link>
                </div>
                <div className="h-7 w-[2px] bg-gray-300"></div>
                <div className="flex">
                    <Icon icon="mingcute:location-3-line" color="#db4444" width="24" />
                    <span className='text-[#db4444]'>Eti-Osa</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
