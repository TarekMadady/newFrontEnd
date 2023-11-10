import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import TrackAdd from "../../../components/admin/adminTrack/TrackAdd";

const AddTrack = () => {
  return (
    <>
      <AdminHeader />
      <TrackAdd />
      <GeneralFooter />
    </>
  );
};

export default AddTrack;
