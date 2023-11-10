import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import CreateVideo from "../../../components/admin/videos/CreateVideo";

const Addvideo = () => {
  return (
    <>
      <AdminHeader />
      <CreateVideo />
      <GeneralFooter />
    </>
  );
};

export default Addvideo;
