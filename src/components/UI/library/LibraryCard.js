import React from "react";
import { Link } from "react-router-dom";

const LibraryCard = (props) => {
  return (
    <div className="card mx-2 my-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.linkDescription}</p>
        <Link to={`/admin/library/delete/${props.id}`} className="card-link">
          Delete
        </Link>
        <Link target="_blank" to={`${props.url}`} className="card-link">
          URL
        </Link>
      </div>
    </div>
  );
};

export default LibraryCard;
