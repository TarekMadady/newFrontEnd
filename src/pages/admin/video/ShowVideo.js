import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import Videos from "../../../components/admin/videos/Videos";

const ShowVideo = () => {
  return (
    <>
      <AdminHeader />
      <Videos />
      <GeneralFooter />
    </>
  );
};

export default ShowVideo;
