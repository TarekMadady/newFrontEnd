import React from "react";
import AdminSide from "../adminGeneral/AdminSide";
import Libraryes from "./Libraryes";

const AllLibraryes = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <AdminSide />
        </div>
        <div className="col-10">
          <div className="row">
            <a href="/admin/library/add" className="btn btn-primary">
              اضافة مكتبة
            </a>
          </div>
          <div className="row">
            <div className="container mt-5">
              <div className="row">
                <div className=" " style={{ width: "50%" }}>
                  <Libraryes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLibraryes;
