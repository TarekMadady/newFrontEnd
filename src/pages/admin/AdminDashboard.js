import React, { useEffect } from "react";
import AdminHeader from "../../components/general/header/AdminHeader";
import { useNavigate } from "react-router-dom";
// import SpecialFooter from "../../components/general/footer/SpecialFooter";
const AdminDashboard = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <AdminHeader />
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <AdminSide />
          </div>
          <div className="col-10">
            <h1>welcome</h1>
          </div>
        </div>
      </div> */}
      {/* <SpecialFooter /> */}
      {/* <GeneralFooter /> */}
    </>
  );
};

export default AdminDashboard;
