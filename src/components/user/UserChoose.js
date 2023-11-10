import React from "react";
import { Link } from "react-router-dom";

const UserChoose = () => {
  return (
    <div className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-12 col-lg-8 col-xl-8 mx-auto d-table h-100 ">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2" style={{fontSize:"35px", fontWeight:"bold"}}>اختر المسار الذى تريدة</h1>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="w-100 d-flex justify-content-between">
                    <div className="col-6 d-flex flex-column mx-2">
                      <img
                        src="images/TT2D.gif"
                        className="img-fluid"
                        alt="2dtrack"
                      />
                      <Link className="btn btn-primary" to="/preexam2d" style={{fontSize:"25px"}}>
                        2D
                      </Link>
                    </div>
                    <div className="col-6 text-end d-flex flex-column ">
                      <img
                        src="images/3d ok gif_1.gif"
                        className="img-fluid"
                        alt="3dtrack"
                      />
                      <Link className="btn btn-primary" to="/preexam3d" style={{fontSize:"25px"}}>
                        3D
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChoose;

{
  /* <div className="container" style={{ height: "100vh" }}>
  <h1 className="text-center">اختر المسار الذى تريدة</h1>
  <div
    dir="rtl"
    className="d-flex justify-content-between align-items-center py-auto h-100 px-5"
  >
    <Link to="/preexam2d" className="btn btn-primary">
      مسار 2D
    </Link>
    <Link to="/preexam3d" className="btn btn-primary">
      مسار 3D
    </Link>
  </div>
</div>; */
}
