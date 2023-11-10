import React, { useEffect, useState } from "react";

import StudentD from "../adminGeneral/StudentD";
const StudentDetail = (props) => {
  const [student, setStudent] = useState({});
  const token = localStorage.getItem("token");
  useEffect(() => {
    Search();
  }, []);
  const Search = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/student/${props.parm}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setStudent(data);
  };
  return (
    <main className="content">
      <StudentD
        key={student._id}
        id={student._id}
        name={student.fullName}
        email={student.email}
        firstTime={student.firstTime}
        cdate={student.createdAt}
        active={student.active}
        prexam={student.prexam}
        exam={student.exams}
      />
    </main>
  );
};

export default StudentDetail;
