import React from "react";
import AdminSide from "../adminGeneral/AdminSide";
import AddLibrary from "../../UI/library/AddLibrary";

const CreateLibrary = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <AddLibrary />
        </div>
      </div>
    </div>
  );
};

export default CreateLibrary;
