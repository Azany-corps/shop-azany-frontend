import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Branches from "../../../components/General/manufacturers/branches/Branches";
import Users from "../../../components/General/manufacturers/branches/Users";
import ManufacturersProfileLayout from "../../../components/General/manufacturers/profile/Layout";
import callAPI from "../../../api/callApi";

const MBranches = () => {
  const [message, setMessage] = useState(true);
  const [buyers, setBuyers] = useState(false);
  const [branches, setBranches] = useState<
    { id: number; branch_name: string; banner_url: string; country: string; created_at: string; user: number[] }[]
  >([]);
  const [users, setUsers] = useState<User[]>([]);

  type User = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    branch_id: number;
    branch: Branch[];
    created_at: string;
  };

  type Branch = {
    id: number;
    branch_name: string;
    banner_url: string;
    country: string;
    created_at: string;
    user: number[];
  };

  const handleMessage = () => {
    setMessage(true);
    setBuyers(false);
  };
  const handleBuyers = () => {
    setMessage(false);
    setBuyers(true);
  };

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await callAPI("auth/fetch_branch_list", "GET", null, headers);
        setBranches(response.data?.values);
        console.log(response.data?.values);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };
        const response = await callAPI("auth/fetch_user_list", "GET", null, headers);
        setUsers(response.data?.values);
        // console.log(response.data?.values?.[1].branch);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-[#F5F5F5]">
      <ManufacturersProfileLayout>
        <div className="p-8 xs:p-4 w-full">
          <div className="py-2">
            <div className="py-2 px-3">
              <h2 className="text-[40px] xs:text-[26px] font-[500]">Branches</h2>
              <div className="py-4 mt-2">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-6">
                    <h2
                      onClick={() => handleMessage()}
                      className={message ? "font-bold cursor-pointer border-b-4 border-[#E51B48]" : "text-[#515151] cursor-pointer"}
                    >
                      Branches
                    </h2>
                    <h2
                      onClick={() => handleBuyers()}
                      className={buyers ? "font-bold cursor-pointer border-b-4 border-[#E51B48]" : "text-[#515151] cursor-pointer"}
                    >
                      Users
                    </h2>
                  </div>
                  {message && (
                    <Link to="/manufacturers-profile/create-branch">
                      <button className="bg-[#1B7CFC] p-2 text-white rounded-md hover:bg-blue-40 xs:hidden">Create Branch</button>
                    </Link>
                  )}
                  {buyers && (
                    <Link to="/manufacturers-profile/create-user">
                      <button className="bg-[#1B7CFC] p-2 text-white xs:hidden rounded-md hover:bg-blue-400">Create User</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {message && (
              <div className="space-y-3">
                {branches.length > 0 ? branches.map((branch) => <Branches key={branch.id} data={branch} />) : <p>No branches found</p>}
              </div>
            )}

            {buyers && (
              <div className="space-y-3">{users.length > 0 ? users.map((user) => <Users key={user.id} data={user} />) : <p>No users found</p>}</div>
            )}
          </div>

          {message && (
            <Link to="/manufacturers-profile/create-branch">
              <button className="bg-[#1B7CFC] w-full p-2 text-white rounded-md hover:bg-blue-40 sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">
                Create Branch
              </button>
            </Link>
          )}

          {buyers && (
            <Link to="/manufacturers-profile/create-user">
              <button className="bg-[#1B7CFC] w-full p-2 text-white rounded-md hover:bg-blue-40 sm:hidden lg:hidden md:hidden 2xl:hidden xl:hidden">Create User</button>
            </Link>
          )}
        </div>
      </ManufacturersProfileLayout>
    </div>
  );
};

export default MBranches;
