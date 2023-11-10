import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("r");
    localStorage.removeItem("userName");
    navigate("/", { replace: true });
  }, []);
  // return <>logout</>;
};

export default Logout;
