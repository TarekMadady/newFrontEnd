import React from "react";
import { Link } from "react-router-dom";
import Courses from "./Courses";
import AdminSide from "../../admin/adminGeneral/AdminSide";

const AllCourses = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <di className="col-2">
          <AdminSide />
        </di>
        <div className="col-10 pt-3">
          <div className="container">
            <div className="row  my-2">
              <div className="col-3">
                <Link to="/admin/course/add" className="btn btn-primary">
                  اضافة كورس
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="d-flex flex-lg-wrap">
                <Courses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
