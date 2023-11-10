import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrackCourses = (props) => {
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/course/all/${props.trackid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setCourse(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">كورسات المسار</h5>
          </div>
          <div className="card-body">
            <table className="table table-hover my-0">
              <thead className="">
                <tr>
                  <th>اسم الكورس</th>
                  <th>عدد الساعات</th>
                  <th>عدد الفديوهات</th>
                  <th>تاريخ الاضافة</th>
                  <th>بينات الكورس</th>
                </tr>
              </thead>
              <tbody>
                {course &&
                  course.map((cour) => (
                    <tr key={cour.id}>
                      <td>{cour.name}</td>
                      <td>{cour.Hour}</td>
                      <td>{cour.videoes}</td>
                      <td>{cour.CreateDate}</td>
                      <td>
                        <Link
                          className=""
                          to={`/admin/course/details/${cour.id}`}
                        >
                          عرض
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
  );
};

export default TrackCourses;
