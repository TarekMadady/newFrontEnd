import React from "react";
import { Link } from "react-router-dom";
import AllActivities from "./AllActivities";
import AdminSide from "../adminGeneral/AdminSide";

const Activities = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="container-fluid pt-3">
            <div className="row">
              <div className="col-2">
                <Link to="/admin/activity/add" className="btn btn-primary">
                  اضافة نشاط
                </Link>
              </div>
            </div>
            <div className="row">
              <AllActivities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
