import React, { useState, useRef, useEffect } from "react";

const GetVideo = (props) => {
  const token = localStorage.getItem("token");
  const videoid = useRef();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    videoData();
  }, []);
  const videoData = async () => {
    const response = await fetch("http://localhost:8000/admin/video/all", {
      method: "GET",
      headers: {
        Authorization: `${token}`,
      },
    });
    const Data = response.json();
    setVideos(Data);
  };
  function Showid() {
    props.vid(videoid.current.value);
  }
  return (
    <select>
      <option value="0" ref={videoid} onChange={Showid}>
        اخترالفيديو
      </option>
      {videos.length > 0 ? (
        videos.map((video) => <option value={video._id}>{video.title}</option>)
      ) : (
        <option value="-1">مفيش فيديوهات</option>
      )}
    </select>
  );
};

export default GetVideo;
