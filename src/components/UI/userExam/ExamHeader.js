import React from "react";

const ExamHeader = ({ arin, poCurrent, inc, exTitle, sen }) => {
  console.log(arin);
  console.log(poCurrent);
  return (
    <div className="row" style={{ height: "10%" }}>
      <div className="col-6 pt-5">
        <div className="d-flex justify-content-between">
          <h5>اختر الاجابة الصحيحة</h5>
          {poCurrent === arin ? (
            <button className="btn btn-dark text-light" onClick={sen}>
              انهاء الاختبار
            </button>
          ) : (
            <button
              onClick={inc}
              type="button"
              className="btn btn-dark text-light"
            >
              السؤال التالى
            </button>
          )}
        </div>
      </div>
      <div className="col-6 pt-5 border-start h-100">
        {exTitle === "preExam" ? <h3></h3> : <h3>{exTitle}</h3>}
      </div>
    </div>
  );
};
export default ExamHeader;
