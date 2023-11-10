import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import AllLibraryes from "../../../components/admin/Library/AllLibraryes";

const Libraryes = () => {
  return (
    <>
      <AdminHeader />
      <AllLibraryes />
      <GeneralFooter />
    </>
  );
};
export default Libraryes;
