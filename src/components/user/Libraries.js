import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Libraries = ({ lid }) => {
  const token = localStorage.getItem("token");
  const [libdata, setLibdata] = useState();
  console.log(lid);
  const myData = async () => {
    const response = await fetch(
      `http://34.41.175.203:8000/library/${lid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setLibdata(data);
  };

  useEffect(() => {
    myData();
  }, []);

  return (
    <>
      <Link
        target="_blank"
        to={libdata && libdata.urlLink}
        className="fs-2 fw-bold my-2"
      >
        {libdata && libdata.title}
      </Link>
      <br />
      <hr />
    </>
  );
};

export default Libraries;
