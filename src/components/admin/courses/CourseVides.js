import React, { useState, useEffect } from "react";
import VideoData from "./VideoData";

const CourseVideoes = ({ id }) => {
  const token = localStorage.getItem("token");
  const [videos, setVideos] = useState([]);
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/course/details/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setVideos(data.coursevideoes);
  };
  useEffect(() => {
    myData();
  }, []);
  return (
    <>
      {videos && videos.map((v, idx) => <VideoData key={idx} vid={v.video} />)}
    </>
  );
};

export default CourseVideoes;
