import React from "react";
import imgC from "./CoursD.jpg";

const CourseCard = (props) => {
  return (
    <div className="card mx-2" style={{ width: "18rem" }}>
      <img src={imgC} className="card-img-top img-fluid" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.target}</li>
        <li className="list-group-item">{props.ins}</li>
        <li className="list-group-item">Course : {props.video}</li>
      </ul>
      <div className="card-body">
        <a href={`/admin/course/${props.id}`} className="card-link text-danger">
          Delete
        </a>
        {/* <a href="/" className="card-link text-success">
          Details
        </a> */}
      </div>
    </div>
  );
};

export default CourseCard;
