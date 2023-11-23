import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const AuthSuccessful = () => {
  const [loading] = useState(false);

  function handleBack() {
    window.history.back();
  }
  return (
    <div className="bg-[#F5F5F5]">
      <div className="w-screen h-screen py-10 flex flex-col gap-5">
        <button onClick={handleBack} className="flex px-20 xs:px-4 items-center gap-2 text-[#515151] ">
          <ArrowBackIcon />
          Back
        </button>
        <div className="flex justify-center items-center xs:px-4">
          <div className="bg-white w-[660px] rounded-md flex flex-col items-center gap-8 justify-center px-20 py-10 xs:px-8 xs:w-full">
            <div>
              <img src="/images/logingood.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[40px] xs:text-[30px] font-[500]">Password reset</p>
              <p className="text-[#515151] flex items-center">Your password has been successfully reset.</p>
            </div>
            <div className="gap-4 flex flex-col w-full items-center">
              <p className="text-[#515151] flex items-center">Click below to log in.</p>
              <Link to="/customers/login">
                <button disabled={loading ? true : false} className="py-2 px-20 bg-[#E51B48] hover:bg-red-700 rounded-md text-white">
                  {loading ? "Loading..." : "Proceed to Login"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSuccessful;
