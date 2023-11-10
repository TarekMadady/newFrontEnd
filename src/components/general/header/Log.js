import React from "react";
import { Link } from "react-router-dom";

const Log = (props) => {
  const role = localStorage.getItem("r");
  const username = localStorage.getItem("userName");
  let url = "";
  if (role === "student") {
    url = "/home";
  } else if (role === "admin") {
    url = "/admin";
  }
  return (
    <>
      <li>
        <Link to={url}>{username}</Link>
      </li>
      <li className="mx-2">مرحبا</li>
    </>
  );
};

export default Log;
