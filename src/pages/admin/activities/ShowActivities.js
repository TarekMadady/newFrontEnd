import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import Activities from "../../../components/admin/activity/Activities";

const ShowActivities = () => {
  return (
    <>
      <AdminHeader />
      <Activities />
      <GeneralFooter />
    </>
  );
};

export default ShowActivities;
