import React from "react";
import Header from "../components/general/header/Header";
import Nav from "../components/general/header/Nav";
import Hero from "../components/general/header/Hero";
import Main from "../components/mainforHome/Mainsection";
// import Feature from "../components/Features/Feature";
import Courses from "../components/Courses/Courses";
import GeneralFooter from "../components/general/footer/GeneralFooter";
const Homepage = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <Main />

      <Courses />
      <GeneralFooter />
    </>
  );
};

export default Homepage;
