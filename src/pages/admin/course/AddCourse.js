import React from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/general/header/AdminHeader";
import CreateCourse from "../../../components/admin/courses/CreateCourse";

const AddCourse = () => {
  const param = useParams();
  const { trackid } = param;
  return (
    <>
      <AdminHeader>
        <CreateCourse tid={trackid} />
      </AdminHeader>
    </>
  );
};

export default AddCourse;
