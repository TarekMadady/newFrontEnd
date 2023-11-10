import React from "react";
import AdminSide from "../adminGeneral/AdminSide";
import AddActivity from "../../UI/activity/AddActivity";

const ActivityAdd = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <AddActivity />
        </div>
      </div>
    </div>
  );
};

export default ActivityAdd;
