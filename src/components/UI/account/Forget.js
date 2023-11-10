import React from "react";
import ForgetPassword from "../../auth/ForgetPassword";

const Forget = () => {
  return (
    <section className="d-flex justify-content-center align-content-center mt-5">
      <div className="container d-flex">
        <div className="col-6">
          <img src="images/login.jpg" alt="Login" className="img-fluid" />
        </div>
        <div className="col-6 d-flex flex-column">
          <h2 className="text-center">نسيت كلمة السر </h2>
          <p className="lead text-center">
            اكتب البريد الالكترونى و سوف يصلك رسالة بالرابط لاعادة كتابة رقم سرى
            جديد
          </p>
          <ForgetPassword />
        </div>
      </div>
    </section>
  );
};

export default Forget;
