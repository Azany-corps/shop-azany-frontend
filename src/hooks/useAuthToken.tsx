import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthToken = (): [string | null, (token: string) => void, (token: string) => void, () => void] => {
  const [authToken, setAuthToken] = useState(() => localStorage.getItem("token"));
  const navigate = useNavigate();

  const saveAuthToken = (token: any) => {
    console.log(token, "we are saving the token");
    localStorage.setItem("token", token);
    setAuthToken(token);
  };

  const deleteAuthToken = (token: any) => {
    console.log("deleting token", token);
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setAuthToken(null);
  };

  const checkAuthToken = () => {
    console.log("checking token");
    let token = localStorage.getItem("token");
    if (
      !token &&
      !window.location.pathname.startsWith("/products") &&
      window.location.pathname !== "/" &&
      !window.location.pathname.startsWith("/farmers") &&
      !window.location.pathname.startsWith("/sell-on-azany") &&
      window.location.pathname !== "/manufacturers" &&
      // window.location.pathname.startsWith("/manufacturers-profile") &&
      // window.location.pathname.startsWith("/customers-profile") &&
      !window.location.pathname.startsWith("/categories") && window.location.pathname !== "/merchants"
    ) {
      console.log("no token");
      navigate("/login");
    }
  };

  return [authToken, saveAuthToken, deleteAuthToken, checkAuthToken];
};

export default useAuthToken;
