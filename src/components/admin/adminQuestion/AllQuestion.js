import React from "react";
import Questions from "../../UI/Question/Questions";
import { useParams } from "react-router-dom";

const AllQuestion = () => {
  const param = useParams();
  const { examid } = param;
  return (
    <>
      <div className="row">
        <div className="col-11 mx-auto mt-2">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">اسئلة الامتحان</h5>
            </div>
            <div className="card-body">{}</div>
          </div>
        </div>
      </div>
      <Questions exid={examid} />
    </>
  );
};

export default AllQuestion;
