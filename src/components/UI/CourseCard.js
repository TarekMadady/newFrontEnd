import React from "react";
import { Link } from "react-router-dom";
import person from "./user-line.svg";

const CourseCard = ({ tname, tabout }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
      <div className="course-item">
        <img src="images/Track.jpg" className="img-fluid" alt="..." />
        <div className="course-content">
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4>Graphics</h4> */}
          </div>
          <h3 dir="rtl">
            <Link to="/details">{tname}</Link>
          </h3>
          <p dir="rtl">{tabout}</p>
          <div className="trainer d-flex justify-content-between align-items-center">
            <div className="trainer-profile d-flex align-items-center">
              <Link to="" className="get-started-btn">
                المزيد
              </Link>
            </div>
            <div className="trainer-rank d-flex align-items-center">
              {/* <img src={person} style={{ width: "18px" }} alt="" />
              &nbsp;20 &nbsp;&nbsp; */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
