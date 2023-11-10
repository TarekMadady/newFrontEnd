import React from "react";
import { useParams } from "react-router-dom";
import DeleteCourse from "../../../components/admin/courses/DeleteCourse";

const CourseDelete = () => {
  const param = useParams();
  const { cid } = param;
  return (
    <>
      <DeleteCourse id={cid} />
    </>
  );
};

export default CourseDelete;
