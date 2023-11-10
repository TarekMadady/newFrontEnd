import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">
            {/* <img src="images/0095.png" alt="" className="img-fluid" style={{width:"80px" , borderRadius:"50%"}} /> */}
          </Link>
        </h1>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
