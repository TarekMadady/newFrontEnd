import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/general/header/Header";
import Nav from "../../components/general/header/Nav";
import Recover from "../../components/UI/account/Recover";
import Footer from "../../components/general/footer/GeneralFooter";

const RecoverPass = () => {
  const params = useParams();
  const { code } = params;
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Recover parm={code} />
      <Footer />
    </>
  );
};

export default RecoverPass;
