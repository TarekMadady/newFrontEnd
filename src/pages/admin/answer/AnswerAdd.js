import React from "react";
import { useParams } from "react-router-dom";
import AddAnswer from "../../../components/admin/answer/AddAnswer";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";

const AnswerAdd = () => {
  const params = useParams();
  const { qid } = params;
  // console.log(qid);
  return (
    <>
      <AdminHeader />
      <AddAnswer parm={qid} />
      <GeneralFooter />
    </>
  );
};

export default AnswerAdd;
