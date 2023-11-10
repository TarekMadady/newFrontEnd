import React from "react";
import RecoverPassword from "../../auth/RecoverPassword";

const Recover = (props) => {
  return (
    <section className="d-flex justify-content-center align-content-center mt-5">
      <div className="container d-flex">
        {/* <div className="col-6">
          <img src="images/login.jpg" alt="Login" className="img-fluid" />
        </div> */}
        <div className="col-12 d-flex flex-column">
          <h2 className="text-center">كلمة المرور الجديدة</h2>
          <RecoverPassword parm={props.parm} />
        </div>
      </div>
    </section>
  );
};

export default Recover;
