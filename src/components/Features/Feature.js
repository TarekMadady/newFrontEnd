import React from "react";
import { Link } from "react-router-dom";
import { calender } from "remixicon/icons/Business/calendar-todo-line.svg";
const Feature = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
              <h3>
                <Link to="">Graphics</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i
                className="ri-bar-chart-box-line"
                style={{ color: "#5578ff" }}
              ></i>
              <h3>
                <Link to="">Illustrator</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <img src={calender} style={{ color: "#e80368" }} alt="" />

              {/* <i
                className="ri-calendar-todo-line"
                style={{ color: "#e80368" }}
              ></i> */}
              <h3>
                <Link to="">Scheduale Course</Link>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i
                className="ri-paint-brush-line"
                style={{ color: "#e361ff" }}
              ></i>
              <h3>
                <Link href="">Premiere</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
