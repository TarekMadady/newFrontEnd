import React from "react";
import { Link } from "react-router-dom";

const NotLog = () => {
  return (
    <>
      <li>
        <Link to="/signup">التسجيل</Link>
      </li>
      <li>
        <Link to="/signin" className="">
          الدخول
        </Link>
      </li>
    </>
  );
};

export default NotLog;
