import React from "react";
import AdminHeader from "../../../components/general/header/AdminHeader";
import GeneralFooter from "../../../components/general/footer/GeneralFooter";
import AllCourses from "../../../components/admin/courses/AllCourses";

const CourseAll = () => {
  return (
    <>
      <AdminHeader />
      <AllCourses />
      <GeneralFooter />
    </>
  );
};

export default CourseAll;
