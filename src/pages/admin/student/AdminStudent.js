import React from "react";
import { useParams } from "react-router-dom";
import AdminHeader from "../../../components/general/header/AdminHeader";
import StudentDetail from "../../../components/admin/adminStudent/StudentDetail";

const AdminStudent = (props) => {
  const params = useParams();
  const { studentid } = params;
  return (
    <>
      <AdminHeader>
        <StudentDetail parm={studentid} />
      </AdminHeader>
    </>
  );
};

export default AdminStudent;
