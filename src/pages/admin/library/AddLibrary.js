import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import CreateLibrary from "../../../components/admin/Library/CreateLibrary";

const AddLibrary = () => {
  return (
    <>
      <AdminHeader />
      <CreateLibrary />
      <GeneralFooter />
    </>
  );
};

export default AddLibrary;
