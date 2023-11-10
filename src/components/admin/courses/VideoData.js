import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoData = (props) => {
  const token = localStorage.getItem("token");
  const [videoData, setVideoData] = useState([]);
  const myData = async () => {
    const response = await fetch(
      `http://localhost:8000/admin/video/details/${props.vid}`,
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
    <div className="w-100 d-flex flex-column">
      <div className="w-75 d-flex me-2">
        <div className="mx-1">اسم الفيديو :</div>
        <div className="mx-1">{videoData && videoData.videoTitle}</div>
      </div>
      <div className="w-75 d-flex me-2">
        <div className="mx-1">مدة العرض :</div>
        <div className="mx-1">{videoData && videoData.videoLength}</div>
      </div>
      <div className="w-75 d-flex me-2">
        <div className="mx-1">الرابط :</div>
        <div className="mx-1">
          <Link to={`/admin/course/video/show/${videoData && videoData._id}`}>
            عرض
          </Link>
        </div>
      </div>
      <div className="w-75 d-flex me-2">
        <div className="mx-1">
          <Link
            className="badge bg-danger"
            to={`/admin/video/delete/${videoData && videoData._id}`}
          >
            حذف الفيديو
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VideoData;
