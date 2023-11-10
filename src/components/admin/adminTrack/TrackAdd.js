import React from "react";
import AddTrack from "../../UI/Track/AddTrack";
import AdminSide from "../adminGeneral/AdminSide";

const TrackAdd = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10 pt-5">
          <AddTrack />
        </div>
      </div>
    </div>
  );
};

export default TrackAdd;
