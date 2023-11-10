import React from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/general/header/AdminHeader";
import TrackCourses from "../../../components/admin/adminTrack/TrackCourses";

const CourseTrack = () => {
  const param = useParams();
  const { tid } = param;
  return (
    <AdminHeader>
      <TrackCourses trackid={tid} />
    </AdminHeader>
  );
};

export default CourseTrack;
