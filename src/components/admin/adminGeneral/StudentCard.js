import React from "react";
import { Link } from "react-router-dom";

const StudentCard = (props) => {
  const joinDate = new Date(props.create);
  const year = joinDate.getFullYear();
  const month = joinDate.getMonth();
  const da = joinDate.getDate();
  return (
    <tr>
      <td className="d-none d-xl-table-cell">
        <Link to={`/admin/student/${props.id}`}>{props.name}</Link>
      </td>
      <td className="d-none d-xl-table-cell">
        <Link to={`mailto:${props.email}`}>{props.email}</Link>
      </td>
      <td>
        {props.active ? (
          <Link to={`/student/deactive/${props.id}`}>مفعل</Link>
        ) : (
          <Link to={`/student/active/${props.id}`}>غير مفعل</Link>
        )}
      </td>
      <td>{`${year}-${month}-${da}`}</td>
    </tr>
  );
};

export default StudentCard;
