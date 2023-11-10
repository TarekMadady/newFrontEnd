import React from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/general/header/AdminHeader";
import ShowVideo from "../../../components/admin/videos/ShowVideo";
const Video = () => {
  const param = useParams();
  const { vid } = param;

  return (
    <AdminHeader>
      <ShowVideo id={vid} />
    </AdminHeader>
  );
};

export default Video;
