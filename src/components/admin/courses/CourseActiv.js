import React, { useState, useEffect } from "react";

const CourseActiv = ({ id }) => {
  const token = localStorage.getItem("token");
  const [act, setAct] = useState([]);
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/activity/all/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setAct(data);
  };
  useEffect(() => {
    myData();
  }, []);

  return <ul>{act && act.map((g) => <li key={g.id}>{g.title}</li>)}</ul>;
};

export default CourseActiv;

{
  /* <ul>{act && act.map((ac, idx) => <li key={idx}>{ac}</li>)}</ul>; */
}
