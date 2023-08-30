import React from 'react'
import styles from '../../styles/Slider.module.css'
type Props = {}

const Slider = (props: Props) => {
    return (
        <>
            <div className='overflow-hidden'>
                <div>
                    <div className='anmated-slider'>
                        <div className='flex justify-between items-center '>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/usa.png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/flags (5).png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/flags (1).png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/flags (2).png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/flags (3).png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cards}>
                                <div className='flex items-center space-x-2'>
                                    <img src='/images/flags (4).png' />
                                    <div>
                                        <h2 className='font-bold'>$500/kg</h2>
                                        <p className='text-gray-400'>Emeka Enterprise</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider