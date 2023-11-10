import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const RecoverPassword = (props) => {
  const passData = useRef();
  let navigate = useNavigate();
  function submitRecover() {
    const userPass = passData.current.value;
    const sendData = {
      password: userPass,
    };
    fetch(`http://localhost:8000/auth/recoverpassword/${props.parm}`, {
      method: "PATCH",
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        navigate("/signin", { replace: true });
      });
  }
  return (
    <form onSubmit={submitRecover} className="mt-5">
      <div className="mb-3">
        <label htmlFor="newpassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="newpassword"
          placeholder="new Password"
          ref={passData}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="newConfpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="newConfpassword"
          placeholder="new Password"
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        تغير كلمة المرور
      </button>
    </form>
  );
};

export default RecoverPassword;
