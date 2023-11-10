import React from "react";
import { Link } from "react-router-dom";
const ActivityCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          عدد المشاركات
          <br />
          {props.ucount}
        </p>
        <Link to={`/admin/active/delete/${props.id}`} className="card-link">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default ActivityCard;
