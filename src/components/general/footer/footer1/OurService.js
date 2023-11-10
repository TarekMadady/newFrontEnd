import React from "react";
import { Link } from "react-router-dom";
const OurService = () => {
  return (
    <div className="col-lg-3 col-md-6 footer-links">
      <h4>Our Services</h4>
      <ul>
        <li>
          <i className="bx bx-chevron-right"></i>
          <Link to="">Sign in</Link>
        </li>
        <li>
          <i className="bx bx-chevron-right"></i>
          <Link to="">Sign up</Link>
        </li>
      </ul>
    </div>
  );
};

export default OurService;
