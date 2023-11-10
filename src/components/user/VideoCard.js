import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoid, cl, vi }) => {
  const token = localStorage.getItem("token");
  console.log("video id", videoid);
  function mj() {
    cl();
    vi(videoid);
  }

  return <Link className="rounded-circle bg-white mx-3" onClick={mj}></Link>;
};

export default VideoCard;

//to={`/course/show/${videoid}`}
