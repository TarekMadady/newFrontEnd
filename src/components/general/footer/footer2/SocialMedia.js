import React from "react";
import { Link } from "react-router-dom";
import twitter from "./twitter.svg";
import facebook from "./facebook-solid.svg";
import instagram from "./instagram.svg";
import skype from "./skype.svg";
import linkedin from "./linkedin-fill.svg";
const SocialMedia = () => {
  return (
    <div className="social-links text-center text-md-right pt-3 pt-md-0">
      <Link to="" className="twitter">
        <img src={twitter} alt="twitter" />
      </Link>
      <Link to="" className="facebook">
        <img alt="facebook" src={facebook} />
      </Link>
      <Link to="" className="instagram">
        <img src={instagram} alt="instagram" />
      </Link>
      <Link to="" className="google-plus">
        <img src={skype} alt="skyper" />
      </Link>
      <Link to="" className="linkedin">
        <img src={linkedin} alt="linked in" />
      </Link>
    </div>
  );
};

export default SocialMedia;
