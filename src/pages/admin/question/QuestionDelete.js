import React from "react";
import { useParams } from "react-router-dom";
import DeleteQuestion from "../../../components/admin/adminQuestion/DeleteQuestion";

const QuestionDelete = () => {
  const params = useParams();
  const { qid } = params;
  return (
    <>
      <DeleteQuestion parm={qid} />
    </>
  );
};

export default QuestionDelete;
