import React from 'react'
import styles from '../../styles/Topheader.module.css'
const TopHeader = () => {
    return (
      <>
        <div className="bg-[#0A1F3C] xs:hidden sm:hidden">
          <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="COL">
                <h2 className="text-[25px]  text-white">
                  SHOP GLOBALLY PAY{" "}
                  <span className={styles.anywhere}>LOCALLY</span>
                </h2>
                <div className="text-sm text-[#FF8D8D]">
                  uniting the world of ecommerce
                </div>
              </div>
              {/* <img src="/images/azanylogo.png" className='w-24'/> */}
              {/* <div className={styles.anywhere}>
                <h2 className="text-white">LOCALLY</h2>
              </div> */}
            </div>
            <div className="flex justify-between space-x-3">
              <div className="text-white px-2 flex justify-center items-center bg-red-600">
                <h2 className="text-[20px]">
                  Call <br /> 342-4783-2838
                </h2>
              </div>
              <img src="/images/topheader.png" className="" />
            </div>
          </div>
        </div>
      </>
    );
}

export default TopHeader

