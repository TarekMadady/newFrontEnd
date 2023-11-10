import React from "react";
import AddVideo from "./AddVideo";
import AdminSide from "../adminGeneral/AdminSide";

const CreateVideo = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <AddVideo />
        </div>
      </div>
    </div>
  );
};
export default CreateVideo;
