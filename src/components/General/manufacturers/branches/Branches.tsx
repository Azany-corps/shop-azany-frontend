import React from "react";
import { Link } from "react-router-dom";
interface BranchData {
  data: {
    id: number;
    branch_name: string;
    banner_url: string;
    country: string;
    user: number[];
    created_at: string;
  };
}

const Branches = ({data}: BranchData) => {
  // Convert the ISO format date string to a Date object
  const createdAt = new Date(data.created_at);

  // Format the date and time in a readable format
  const formattedCreatedAt = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;

  return (
    <>
    <Link to={`/manufacturers-profile/edit-branch/${data.id}`}>
      <div>
        <div className="flex flex-col p-4 border gap-4 rounded-md shadow-md cursor-pointer">
          <div className="flex items-center space-x-2">
            <div className="">
              <div className="flex gap-4 felx-row items-center">
              <h1 className="font-bold">{data.branch_name}</h1>
              <h1 className="font-bold">{data.country}</h1>
              </div>
              <img src="/images/branches2.png" alt="branches" />
            </div>
          </div>

          <div className="flex justify-between">
            <p className="text-[#515151]">Created: {formattedCreatedAt}</p>
            <p className="text-[#515151]">{data.user.length} user{data.user.length > 0 ? 's' : ''} assigned</p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Branches;
