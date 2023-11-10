import React from "react";
import University from "./University";
import UsefulLink from "./UsefulLink";
import OurService from "./OurService";
import Inspire from "./Inspire";

const Footer1 = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <University />
          <UsefulLink />
          {/* <OurService /> */}
          <Inspire />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
