import React from "react";
import SignInForm from "../../auth/SingInForm";
const Account = () => {
  return (
    // <section className="d-flex justify-content-center align-content-center mt-5">
    //   <div className="container d-flex">
    //     <div className="col-6">
    //       <img src="images/login.jpg" alt="Login" className="img-fluid" />
    //     </div>
    //     <div className="col-6 d-flex flex-column">
    //       <h2 className="text-center">تسجيل الدخول</h2>
    //       <p className="lead text-center">
    //         تسجيل الدخول بالبريد الالكترونى فى حال عدم تذكر كلمة المرور اضغط على
    //         نسيت كلمة السر وسوف ترسل لك رسالة بالرمز المطلوب للدخول
    //       </p>
    <SignInForm />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Account;
