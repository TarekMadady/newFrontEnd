import React from "react";
import VideoAll from "./VideoAll";
import AdminSide from "../adminGeneral/AdminSide";

const Videos = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <a href="/admin/video/add" className="btn btn-primary">
                  اضافة فيديو
                </a>
              </div>
            </div>
            <div className="row">
              <VideoAll />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
