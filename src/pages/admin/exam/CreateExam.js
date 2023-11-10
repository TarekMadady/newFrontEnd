import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import AddExam from "../../../components/admin/adminExam/AddExam";
const CreateExam = () => {
  return (
    <>
      <AdminHeader />
      <AddExam />
      <GeneralFooter />
    </>
  );
};

export default CreateExam;
