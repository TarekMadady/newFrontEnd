import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../components/Courses/CourseADetails";
import UserHeader from "../../components/general/header/UserHeader";

const StudentCourse = () => {
  const param = useParams();
  const { courid } = param;
  return (
    <>
      <UserHeader />
      <CourseDetails courid={courid} />
    </>
  );
};

export default StudentCourse;
