import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ShowVideoUser from "./ShowVideoUser";

const ContentCard = ({ cid, coun }) => {
  const token = localStorage.getItem("token");
  const [videoData, setVideoData] = useState();
  const [show, setShow] = useState(false);
  const myData = async () => {
    const response = await fetch(`http://localhost:8000/video/details/${cid}`, {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await response.json();
    console.log(data.videoTitle);
    setVideoData(data);
  };

  useEffect(() => {
    myData();
  }, []);

  function showVid() {
    setShow(true);
  }

  return (
    <>
      <div className="row">
        <div dir="rtl" className="col-3">
          الدرس : {coun}
          <br />
          <Link
            key={videoData && videoData._id}
            className="fs-2"
            onClick={showVid}
            to={`/show/video/${cid}`}
          >
            {videoData && videoData.videoTitle}
          </Link>
        </div>
        {/* <div className="col-9">
          <ShowVideoUser id={cid} />
        </div> */}
      </div>
    </>
  );
};

export default ContentCard;
