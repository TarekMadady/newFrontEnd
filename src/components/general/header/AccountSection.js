import React from "react";
import NotLog from "./NotLog";
import Log from "./Log";

const AccountSection = () => {
  const token = localStorage.getItem("token");
  // const username = localStorage.getItem("username");
  const role = localStorage.getItem("role");
  return <>{token != null ? <Log role={role} /> : <NotLog />}</>;
};

export default AccountSection;
