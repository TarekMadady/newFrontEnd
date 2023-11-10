import React from "react";
import StudentHeader from "../general/header/StudentHeader";

import { useParams } from "react-router-dom";
const ShowVideoUser = () => {
  const pram = useParams();
  const { vid } = pram;
  return (
    <>
      <StudentHeader />
      <div className="container mt-3">
        <div className="row">
          <div className="col-6 mx-auto">
            <video controls className="w-100">
              <source
                src={`http://localhost:8000/video/show/${vid}`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowVideoUser;
