import React from "react";
// import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/general/header/AdminHeader";
import CourseOne from "../../../components/admin/courses/CourseOne";
const CourseDetails = () => {
  return (
    <AdminHeader>
      <CourseOne />
    </AdminHeader>
  );
};

export default CourseDetails;
