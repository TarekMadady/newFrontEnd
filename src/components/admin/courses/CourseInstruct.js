import React, { useState, useEffect } from "react";

const CourseInstruct = ({ id }) => {
  const token = localStorage.getItem("token");
  const [instruct, setInstruct] = useState([]);
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
    setInstruct(data.courseinstructions);
  };

  useEffect(() => {
    myData();
  }, []);
  return (
    <ul>{instruct && instruct.map((c, idx) => <li key={idx}>{c}</li>)}</ul>
  );
};

export default CourseInstruct;
