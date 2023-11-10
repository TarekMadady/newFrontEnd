import React, { useState } from "react";
import { Link } from "react-router-dom";
import QuestionAnswers from "./QuestionAnswers";
import AnswerToAdd from "../../UI/answers/AnswerToAdd";

const QuestionCard = ({ title, typ, degree, id, answeres, num }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAddPanel, setShowAddPanel] = useState(false);
  function changes() {
    setShowAnswer(true);
  }
  function clos() {
    setShowAnswer(false);
  }

  function AddPanel() {
    setShowAddPanel(true);
  }

  function hidePanel() {
    setShowAddPanel(false);
  }

  return (
    <>
      <div className="row" dir="rtl">
        <div className="col-11 mx-auto mt-1">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">السؤال{num}:</h5>
            </div>
            <div className="card-body">
              <strong>{title}؟</strong>
              <br />
              <strong> الدرجة:{degree}</strong>
              &nbsp;
              <strong>نوع السؤال: {typ}</strong>
              <hr />
              <div className="d-flex  ">
                <Link to="" className="mx-2" onClick={changes}>
                  الاجابات
                </Link>
                <Link to={`/admin/question/delete/${id}`} className="mx-2">
                  حذف
                </Link>
                <Link className="mx-2" onClick={AddPanel}>
                  اضافة اجابة
                </Link>
              </div>
              {showAnswer ? <QuestionAnswers qid={id} ev={clos} /> : <></>}
            </div>
          </div>
        </div>
      </div>
      {showAddPanel ? <AnswerToAdd id={id} clo={hidePanel} /> : <></>}
    </>
  );
};

export default QuestionCard;
