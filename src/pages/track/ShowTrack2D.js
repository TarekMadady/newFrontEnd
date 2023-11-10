import React from "react";
import Track2D from "../../components/track/Track2D";
import UserHeader from "../../components/general/header/UserHeader";

const ShowTrack2D = () => {
  return (
    <>
      <UserHeader />
      <div className="container" dir="rtl">
        <Track2D />
      </div>
    </>
  );
};

export default ShowTrack2D;
