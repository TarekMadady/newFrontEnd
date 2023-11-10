import React from "react";
import UserHeader from "../../components/general/header/UserHeader";
import StudentHeader from "../../components/general/header/StudentHeader";
import UserTrack from "./UserTrack";
const Home = () => {
  return (
    <>
      {/* <UserHeader /> */}
      <StudentHeader />
      <br />
      <UserTrack />
    </>
  );
};

export default Home;
