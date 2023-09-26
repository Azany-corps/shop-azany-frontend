import React, { useState } from "react";
import Card from "../../../components/General/plans/Card";
import CardSOA from "./Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import PlansCard from "../../../components/General/plans/Card";
import callAPI from "../../../api/callApi";

const SubscriptionSOA = () => {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleContinueClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (token === null) {
        throw new Error("Token not found in local storage");
      }
      const data = new FormData();
      data.append("module", selectedPlan || "");
      data.append("duration", "14");

      const response = await callAPI("auth/create_user_free_subscription", "POST", data, {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      });
      console.log(response);
      toast.success("Successfully selected a plan", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      navigate("/manufacturers-profile");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="flex w-[90%] mx-auto xs:w-full flex-col p-6 mb-6 gap-10 bg-[#DAFFDA] rounded-md">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-4xl xs:text-2xl font-bold text-[#132A13]">Subsription Plans</p>
        <p className="text-xl xs:text-base">Discover the Azany Advantage</p>
        <p className="text-base xs:text-base">All paid plans start with a 14 day trial period.</p>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center xs:flex-col xs:w-full">
        <PlansCard price={"$44"} module={"Basic Plan"} onClick={() => handleCardClick("basic")} selected={selectedPlan === "basic"} />
        <PlansCard
          price={"$79"}
          module={"Standard Plan"}
          onClick={() => handleCardClick("standard")}
          recommended
          selected={selectedPlan === "standard"}
        />
        <PlansCard price={"$99"} module={"Premium Plan"} onClick={() => handleCardClick("premium")} selected={selectedPlan === "premium"} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <button className="bg-[#E51B48] text-white rounded-md w-2/5 p-2">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default SubscriptionSOA;
