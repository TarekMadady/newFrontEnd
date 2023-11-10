import React from "react";
import { Link } from "react-router-dom";

const NavforStudent = () => {
  const usename = localStorage.getItem("username");
  return (
    <nav className="navbar order-last order-lg-0">
      <ul>
        <li>
          <Link to="/">Track</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavforStudent;
