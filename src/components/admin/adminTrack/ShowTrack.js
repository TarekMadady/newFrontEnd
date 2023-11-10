import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTrack from "../../UI/Track/AddTrack";

const ShowTrack = () => {
  const token = localStorage.getItem("token");
  const [track, setTrack] = useState(false);
  const [allTrack, setAllTrack] = useState([]);
  const myData = async () => {
    const response = await fetch("http://localhost:8000/admin/track/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setAllTrack(data);
  };
  useEffect(() => {
    myData();
  }, []);

  function showAdd() {
    setTrack(true);
  }
  return (
    <>
      <div className="row mt-2">
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">اضافة مسار</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                اضافة مسار الى الموقع يحتوى على الكورسات و الانشطة
              </p>
              <Link className="card-link" onClick={showAdd}>
                اضافة
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">{track ? <AddTrack /> : <></>}</div>
      <div className="row mt-2">
        <div className="col-12 col-md-12 col-xxl-12 d-flex order-2 order-xxl-3">
          <div className="card flex-fill w-100">
            <div className="card-header">
              <h5 className="card-title mb-0">بينات المديولات التعليمية</h5>
            </div>
            <div className="card-body d-flex">
              <div className="align-self-center w-100">
                <table className="table table-hover my-0" dir="rtl">
                  <thead>
                    <tr>
                      <th>المسار</th>
                      <th>التاج</th>
                      <th>عدد الكورسات</th>
                      <th>اضافة كورس</th>
                      <th>حذف المسار</th>
                      <th>عرض الكورسات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allTrack &&
                      allTrack.map((track) => (
                        <tr key={track._id}>
                          <td>{track.trackName}</td>
                          <td>{track.tags}</td>
                          <td>{track.Courses.length}</td>
                          <td>
                            <Link
                              to={`/admin/course/add/${track._id}`}
                              className="badge bg-success"
                            >
                              اضافة كورس
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/admin/track/${track._id}`}
                              className="badge bg-danger"
                            >
                              حذف
                            </Link>
                          </td>
                          <td>
                            <Link
                              to={`/admin/track/course/${track._id}`}
                              className="badge bg-info"
                            >
                              عرض الكورسات
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTrack;
