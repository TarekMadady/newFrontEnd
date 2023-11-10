import React from "react";
import { useParams } from "react-router-dom";
import AddQuestion from "../../../components/admin/adminQuestion/AddQuestion";
import AdminHeader from "../../../components/general/header/AdminHeader";

const QuestionAdd = () => {
  const params = useParams();
  const { examid } = params;
  return (
    <>
      <AdminHeader>
        <AddQuestion exam={examid} />
      </AdminHeader>
    </>
  );
};

export default QuestionAdd;
