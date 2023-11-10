import React from "react";

const ExamTail = () => {
  return (
    <div className="col-6 border-start h-100">
      <div className="card">
        <div className="card-body">Info for Question</div>
      </div>
      <div className="mt-3 btn-group">
        <button className="btn btn-primary text-light mx-2">
          Reload Question
        </button>
        <button className="btn btn-danger text-light mx-2">Exist Exam</button>
      </div>
    </div>
  );
};

export default ExamTail;
