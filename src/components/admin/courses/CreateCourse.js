import React from "react";
import CourseAdd from "./CourseAdd";

const CreateCourse = (props) => {
  return (
    <div className="row mt-2">
      <div className="col-11 mx-auto">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">اضافة كورس</h5>
          </div>
          <div className="card-body">
            <CourseAdd trac={props.tid} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateCourse;
