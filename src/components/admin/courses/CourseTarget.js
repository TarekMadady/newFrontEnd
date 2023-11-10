import React, { useState, useEffect } from "react";

const CourseTarget = ({ id }) => {
  const token = localStorage.getItem("token");
  const [target, setTarget] = useState([]);
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/course/details/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setTarget(data.coursetarget);
  };
  useEffect(() => {
    myData();
  }, []);

  return <ul>{target && target.map((t, idx) => <li key={idx}>{t}</li>)}</ul>;
};

export default CourseTarget;
