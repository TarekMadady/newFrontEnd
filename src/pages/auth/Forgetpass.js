import React from "react";
import Header from "../../components/general/header/Header";
import Nav from "../../components/general/header/Nav";
import Forget from "../../components/UI/account/Forget";
import GeneralFooter from "../../components/general/footer/GeneralFooter";

const Forgetpass = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Forget />
      <GeneralFooter />
    </>
  );
};

export default Forgetpass;
