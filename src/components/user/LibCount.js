import React, { useEffect, useState } from "react";
import Libraries from "./Libraries";

const LibCount = ({ cid }) => {
  const token = localStorage.getItem("token");
  const [mlib, setMlib] = useState();
  const myData = async () => {
    const response = await fetch(
      `http://34.41.175.203:8000/course/${cid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setMlib(data.courselibraries);
  };

  useEffect(() => {
    myData();
  }, [cid]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {mlib &&
            mlib.map((l, indx) => (
              <Libraries key={indx} nu={indx + 1} lid={l.libray} />
            ))}
        </div>
        <div className="col-6">
          <img
            src="/images/library.gif"
            alt="insta"
            className="image-fluid w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default LibCount;
