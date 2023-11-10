import React from "react";

const TrackCard = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {props.trackName}/Course{props.course}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {props.About}
          <hr />
          <div className="container">
            <div className="d-flex justify-content-between">
              <a href="/" className="btn btn-primary">
                اضافة كورس
              </a>
              <a href={`/admin/track/${props.tid}`} className="btn btn-danger">
                حذف المسار
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
