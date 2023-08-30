import React from "react";
import { countries } from "../../newCountries";

type Props = {
  type: string;
};

export default function Report({ type }: Props) {
  return (
    <div className="mx-auto py-10 h-screen bg-[#F5F5F5]">
      <form action="submit" className="w-[90%] bg-white h-full mx-auto ">
        <div className="bg-[#1B7CFC] mb-10 rounded-lg flex justify-between items-center px-20 py-4">
          <h1 className="text-white text-3xl">Report a {type}</h1>
          <img src="/images/azanylogofinal.png" alt="logo" className="w-[200px] h-[50px] object-cover" />
        </div>
        <div className="form-container px-6">
          <p className="text-sm font-light mb-10">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>

          <div className="form flex flex-col gap-3 font-normal">
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  First & Last Name*
                </label>
                <input type="text" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Email Address*
                </label>
                <input type="text" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Country*
                </label>
                <select className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]">
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Phone Number*
                </label>
                <input type="text" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Reason for Reporting*
                </label>
                <select className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]">
                  <option value="">Select a reason </option>
                  <option value="">Bad product </option>
                  <option value="">Shipping Defects </option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Vendor or Company’s Name*
                </label>
                <input type="text" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light">
                  Additional Details (optional)
                </label>
                <textarea rows={4} className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="first_name" className="font-light capitalize">
                  {type}’s {type === "vendor" ? "Profile" : ""} Link*
                </label>
                <input type="text" className="px-4 w-full py-3 rounded-md border border-gray-300 bg-[#F5F5F5]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] mx-auto mt-10">
          <button className="bg-[#E51B48] w-full text-white p-3 rounded-md mx-auto">Submit</button>
        </div>
      </form>
    </div>
  );
}
