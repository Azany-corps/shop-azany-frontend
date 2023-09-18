import React from "react";
// import welcomeHTML from '../../email-templates/welcome.html'
//@ts-ignore
import logo from "../../assets/Logo.png";
const Email = () => {
  return (
    <div className="bg-[#EDEDED] md:px-[20%] px-[5%] p-8">
      <div className="bg-white flex flex-col  p-4 gap-6 rounded-md">
        <div className="block">
          <img src={logo} alt="" />
        </div>
        <div className="border-t border-[#969696] border"></div>
        <div className="items-center">
          <p>
            Dear Tobi,
            <br />
            <br />
            Here's your Azany OTP Code:
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-6xl text-[#1B7CFC] font-bold">5364</p>
        </div>
        <div className="border-t border-[#969696] border"></div>
        <div>
          <p>
            Use it to verify your identity. Please keep it confidential and do not share it with anyone. If you didn't request this OTP or have
            concerns, contact us at support@azany.com. Your security matters to us.
            <br />
            Warm regards,
            <br />
            Azany Teams
            <br />
          </p>
        </div>
        <div>
          <p>
            Team Website: www.azany.com
            <br />
            Customer Support: support@azany.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Email;
