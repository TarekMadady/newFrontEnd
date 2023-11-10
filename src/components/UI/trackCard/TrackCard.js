import React from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
import icon from "./save.svg";
import iconRight from "./arrow-right.svg";

const TrackCard = (props) => {
  let navigate = useNavigate();
  // const url = "/track/enroll/" + props.id;
  const token = localStorage.getItem("token");

  function enrolCour() {
    // const courid = props.id;
    fetch(`https://tutorialbackend.onrender.com/track/enroll/${props.id}`, {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/home", {
          replace: true
        });
      });
  }

  return ( <
    div className = "border rounded p-1 d-flex flex-column  m-3 w-25 shadow-sm" >
    <
    div className = "d-flex flex-column m-2  rounded-top p-3 "
    style = {
      {
        background: "url('/images/Track.jpg')",
        backgroundSize: "cover",
      }
    } >
    <
    div className = "d-flex w-100  " >
    <
    div className = "fs-6 align-self-center" > {
      props.tag
    } < /div> <
    Link to = ""
    className = "" >
    <
    img src = {
      icon
    }
    style = {
      {
        height: "20px"
      }
    }
    className = "align-self-center"
    alt = "" /
    >
    <
    /Link> <
    /div> <
    div className = "w-100 d-flex    mt-5 text-white " > {
      /* <h3>{props.title}</h3> */ } <
    Link >
    <
    img src = {
      iconRight
    }
    alt = "" / >
    <
    /Link> <
    /div> <
    /div> <
    div className = "d-flex flex-column align-items-center justify-content-between align-self-end  w-100 px-3 py-3  " >
    <
    h3 > {
      props.title
    } < /h3> <
    h3 className = "fs-5" > {
      props.about
    } < /h3> <
    Link onClick = {
      enrolCour
    }
    className = "btn btn-dark rounded mb-0" >
    ابدء <
    /Link> <
    /div> <
    /div>
  );
};

export default TrackCard;

//rgba(9, 139, 192, 0.24)