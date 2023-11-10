import React, { useState, useEffect } from "react";

const ExamQuestion = ({ qtxt }) => {
  console.log("exam question", qtxt);
  console.log(qtxt);
  const [que, setQue] = useState({});
  const getQuestText = () => {
    setQue(qtxt);
  };
  useEffect(() => {
    getQuestText();
  }, []);
  console.log(que);
  return (
    <div className="col-6  border-start  h-100">
      <div className="d-flex flex-column pt-5 justify-content-between al h-100">
        <div className=" h-100 align-self-center mt-auto">
          <h4 dir="rtl" className="fs-1 fw-bold" >السؤال :</h4>
          <h4 className="mt-3 ms-3 fs-1 fw-bold mt-auto" dir="rtl">
            {qtxt}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ExamQuestion;
