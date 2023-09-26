import React, { useState } from "react";
import PlansCard from "../../../components/General/plans/Card";
import callAPI from "../../../api/callApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Plans = () => {
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
    <div className="bg-[#F5F5F5] xs:overflow-x-hidden">
      <ToastContainer />
      <div className="py-10 mx-auto w-[90%]">
        <div className="text-left ">
          <img src="/images/azanylogofinal.png" alt="logo" className="w-20" />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="font-medium text-[#1B7CFC]">WELCOME TO AZANY BUSINESS</p>
            <p className="font-semibold text-xl">Select your Azany plan</p>
            <p className="text-[#515151]">All paid plans start with a 14 day trial period.</p>
          </div>
          <div className="flex flex-row gap-8 justify-center xs:flex-col mx-auto">
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
          <div className="flex justify-between xs:flex-col xs:gap-4">
            <div>
              <p className="text-[14px] font-normal w-[600px] xs:w-full smm:text-left text-center">
                Prices do not include applicable taxes, which are determined according to your billing address. The final price can be seen on the
                purchase page, before payment is completed.
              </p>
            </div>
            <button
              disabled={loading ? true : false}
              onClick={handleContinueClick}
              className="py-2 px-20 bg-[#E51B48] rounded-md text-white hover:bg-red-700"
            >
              {loading ? "Loading..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
