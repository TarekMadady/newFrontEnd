import React, { useEffect, useState } from "react";

import ActivCard from "./ActivCard";

const ActiveCount = ({ cid }) => {
  const token = localStorage.getItem("token");
  const [actd, setActd] = useState();
  const myData = async () => {
    const response = await fetch(
      `http://34.41.175.203/course/${cid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    const data = await response.json();
    setActd(data.courseActivities);
  };

  useEffect(() => {
    myData();
  }, [cid]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {actd &&
            actd.map((C, indx) => (
              <ActivCard key={indx} nu={indx + 1} acid={C.activity} />
            ))}
        </div>
        <div className="col-6">
          <img
            src="/images/Track_1.gif"
            alt="insta"
            className="image-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveCount;
