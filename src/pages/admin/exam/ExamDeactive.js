import React from "react";
import { useParams } from "react-router-dom";
import DeactiveExam from "../../../components/admin/adminExam/DeactiveExam";

const ExamActive = () => {
  const params = useParams();
  const { examid } = params;
  return (
    <>
      <DeactiveExam parm={examid} />
    </>
  );
};

export default ExamActive;
