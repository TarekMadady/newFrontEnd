// import React from "react";
import { useNavigate } from "react-router-dom";

const ActiveExam = (props) => {
  let navigate = useNavigate();
  const examid = props.parm;
  const token = localStorage.getItem("token");
  fetch(`http://34.41.175.203/admin/exam/active/${examid}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      navigate("/admin/exam", {
        replace: true,
      });
    });
  // return <>Hello</>;
};

export default ActiveExam;
