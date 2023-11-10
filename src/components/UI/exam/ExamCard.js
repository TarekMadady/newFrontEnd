import React from "react";
import { Link } from "react-router-dom";

const ExamCard = (props) => {
  // const resu = props.active;
  const myDate = new Date(props.exDate);
  const Year = myDate.getFullYear();
  const month = myDate.getMonth();
  const d = myDate.getDate();
  return (
    <tr>
      <td className="d-none d-xl-table-cell">
        <Link to={`/admin/questions/${props.exid}`}>{props.Examname}</Link>
      </td>
      <td className="d-none d-xl-table-cell">
        <Link>{props.examdegree}</Link>
      </td>
      <td className="d-none d-xl-table-cell">
        <Link>{props.sucesspers}%</Link>
      </td>
      <td className="d-none d-xl-table-cell">
        <Link>{props.excount}</Link>
      </td>
      <td className="d-none d-xl-table-cell">
        {props.active ? (
          <Link
            to={`/admin/examdeactive/${props.exid}`}
            className="badge bg-danger"
          >
            غير مفعل
          </Link>
        ) : (
          <Link
            to={`/admin/examactive/${props.exid}`}
            className="badge bg-success"
          >
            مفعل
          </Link>
        )}
      </td>
      <td className="d-none d-xl-table-cell">{`${Year}-${month}-${d}`}</td>
      <td className="d-none d-xl-table-cell">
        <Link to={`/admin/question/add/${props.exid}`}> اضافة اسئلة </Link>
      </td>
      <td className="d-none d-xl-table-cell">
        <Link
          to={`/admin/examdelete/${props.exid}`}
          className="badge bg-danger"
        >
          حذف
          <span
            className=" trash-2
"
          ></span>
        </Link>
      </td>
    </tr>
  );
};

export default ExamCard;
