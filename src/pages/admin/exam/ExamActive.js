import React from "react";
import { useParams } from "react-router-dom";
import ActiveExam from "../../../components/admin/adminExam/ActiveExam";

const ExamActive = () => {
  const params = useParams();
  const { examid } = params;
  return (
    <>
      <ActiveExam parm={examid} />
    </>
  );
};

export default ExamActive;
