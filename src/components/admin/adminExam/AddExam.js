import React from "react";
import ExamCreate from "../../UI/exam/ExamCreate";
import { Link } from "react-router-dom";

const AddExam = (props) => {
  function hand() {
    props.evn();
  }
  return (
    <div className="row">
      <div className="col-12 col-lg-6 mx-auto">
        <div className="card">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0 float-end">
                <Link onClick={hand}>X</Link>
              </h5>
              <h5 className="card-title mb-0">اضافة امتحان</h5>
            </div>
            <div className="card-body">
              <ExamCreate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExam;
