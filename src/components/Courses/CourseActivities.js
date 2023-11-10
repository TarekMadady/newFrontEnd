import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MCourseActive = ({ Actid }) => {
  console.log(Actid);
  const token = localStorage.getItem("token");
  const [myAdj, setMyAdj] = useState();
  const myData = async () => {
    const response = await fetch(`http://localhost:8000/activ/${Actid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    setMyAdj(data);
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <Link className="" to={`/addajective/${myAdj && myAdj._id}`}>
      {myAdj && myAdj.title}hh
    </Link>
  );
};

export default MCourseActive;
