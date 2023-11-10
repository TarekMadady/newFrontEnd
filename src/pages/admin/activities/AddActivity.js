import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import ActivityAdd from "../../../components/admin/activity/ActivityAdd";

const AddActivity = () => {
  return (
    <>
      <AdminHeader />
      <ActivityAdd />
      <GeneralFooter />
    </>
  );
};

export default AddActivity;
