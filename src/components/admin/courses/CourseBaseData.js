import React from "react";

const CourseBaseData = ({ hour, Author, About }) => {
  return (
    <div className="card-body">
      <div className="w-100 d-flex flex-column">
        <div className="w-100 d-flex">
          <div className=" mx-2">
            <strong>المدرب :</strong>
          </div>
          <div className="w-50 mx-2">{Author}</div>
        </div>
        <div className="w-100 d-flex">
          <div className=" mx-2">
            <strong>عدد الساعات :</strong>
          </div>
          <div className="w-50 mx-2">{hour}</div>
        </div>
        <div className="w-100 d-flex">
          <div className="w-25 mx-2">
            <strong>عن الكورس :</strong>
          </div>
          <div className="w-100 mx-2">{About}</div>
        </div>
      </div>
    </div>
  );
};

export default CourseBaseData;
