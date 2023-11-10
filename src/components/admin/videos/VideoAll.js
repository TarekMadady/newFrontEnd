import React, { useEffect, useState } from "react";
import VideoCard from "../../UI/videos/VideoCard";

const VideoAll = () => {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllVideo();
  }, []);
  const getAllVideo = async () => {
    const respons = await fetch("http://localhost:8000/admin/video/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const Data = await respons.json();
    setVideos(Data);
  };
  return (
    <>
      {videos.length > 0 ? (
        videos.map((vido) => (
          <VideoCard
            key={vido._id}
            videoTitle={vido.videoTitle}
            videoLength={vido.videoLength}
            url={vido.videoFile}
            id={vido._id}
          />
        ))
      ) : (
        <div>No Video</div>
      )}
    </>
  );
};

export default VideoAll;
