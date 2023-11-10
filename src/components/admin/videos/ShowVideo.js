import React, { useState, useEffect } from "react";

const ShowVideo = (props) => {
  const token = localStorage.getItem("token");
  const [videoData, setVideoData] = useState();
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/video/details/${props.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setVideoData(data);
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">
              {videoData && videoData.videoTitle}
            </h5>
          </div>
          <div className="card-body">
            <video controls className="w-100">
              <source
                src={`http://localhost:8000/admin/video/show/${props.id}`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowVideo;
