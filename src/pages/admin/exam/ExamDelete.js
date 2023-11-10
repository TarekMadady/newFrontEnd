import React from "react";
import { useParams } from "react-router-dom";
import DeleteExam from "../../../components/admin/adminExam/DeleteExam";

const ExamActive = () => {
  const params = useParams();
  const { examid } = params;
  return (
    <>
      <DeleteExam parm={examid} />
    </>
  );
};

export default ExamActive;
