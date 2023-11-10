import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const useEmail = useRef();
  let navigate = useNavigate();
  function forgetHandle(event) {
    event.preventDefault();
    const usermail = useEmail.current.value;
    const Data = {
      email: usermail,
    };
    fetch("http://localhost:8000/auth/forgetpassword", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/", { replace: true });
      });
  }

  return (
    <form onSubmit={forgetHandle}>
      <div className="mb-3">
        <label htmlFor="userEmail">Email</label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="Enter Your Mail"
          ref={useEmail}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Signin
      </button>
    </form>
  );
};

export default ForgetPassword;
