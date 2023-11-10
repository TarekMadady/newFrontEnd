import React, { useEffect, useState } from "react";

const CourseName = ({ vid }) => {
  const token = localStorage.getItem("token");
  const [myV, setMyV] = useState();
  const myData = async () => {
    const response = await fetch(`http://localhost:8000/video/details/${vid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    console.log("fname", data);
    setMyV(data);
  };

  useEffect(() => {
    myData();
  }, []);
  return (
    <div className="row  w-100">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="h2">{myV && myV.videoTitle}</h5>
        </div>
        <div>
          <h5 className="h2">{myV && myV.videoLength}</h5>
        </div>
      </div>
    </div>
  );
};

export default CourseName;
