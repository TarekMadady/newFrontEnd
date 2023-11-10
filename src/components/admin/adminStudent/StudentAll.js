import React, { useEffect, useState } from "react";
import StudentCard from "../adminGeneral/StudentCard";
const StudentAll = () => {
  const token = localStorage.getItem("token");
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    Search();
  }, []);
  const Search = async () => {
    const response = await fetch("http://localhost:8000/admin/student/all", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setStudentData(data);
  };
  return (
    <div className="row mt-2">
      <div className="col-12 col-md-12 col-xxl-12 d-flex order-2 order-xxl-3">
        <div className="card flex-fill w-100">
          <div className="card-header">
            <h5 className="card-title mb-0">بيانات الطلاب</h5>
          </div>
          <div className="card-body d-flex">
            <div className="align-self-center w-100">
              <table className="table table-hover my-0">
                <thead>
                  <tr>
                    <th>الاسم</th>
                    <th>الايميل</th>
                    <th>مفعل</th>
                    <th>تاريخ الانضمام</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData &&
                    studentData.map((student) => (
                      <StudentCard
                        key={student._id}
                        name={student.fullName}
                        id={student._id}
                        email={student.email}
                        active={student.active}
                        create={student.createdAt}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAll;
