import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignInForm = () => {
  const mailData = useRef();
  const passData = useRef();
  let navigate = useNavigate();
  function submitFormHandler(event) {
    event.preventDefault();
    const userEmail = mailData.current.value;
    const userPass = passData.current.value;
    const sendData = {
      email: userEmail,
      password: userPass,
    };
    fetch("http://localhost:8000/auth/signin", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("uid", data.id);
        localStorage.setItem("r", data.role);
        localStorage.setItem("userName", data.username);
        if (data.role === "student") {
          navigate("/firsttime", {
            replace: true,
          });
        } else if (data.role === "admin") {
          navigate("/admin", { replace: true });
        }
      });
  }
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">اهلا بيك</h1>
                <p className="lead">قم بادخال البريد الالكترونى و كلمة السر</p>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={submitFormHandler} dir="rtl">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          البريد الالكترونى
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter your email"
                          dir="ltr"
                          ref={mailData}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          كلمة السر
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          placeholder="Type your password"
                          dir="ltr"
                          ref={passData}
                        />
                      </div>
                      <div>
                        <div className="form-check align-items-center">
                          <input
                            type="checkbox"
                            id="customeControlInline"
                            className="form-check-input"
                            value="remember-me"
                            name="remember-me"
                            checked
                          />
                          <label
                            htmlFor="customeControlInline"
                            className="form-check-label text-small"
                          >
                            تذكرنى
                          </label>
                        </div>
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-lg btn-primary">دخول</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3" dir="rtl">
                ليس لديك حساب على الموقع <Link to="/signup">سجل دخول</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInForm;

//  <form onSubmit={submitFormHandler} className="mt-5">
//    <div className="mb-3">
//      <label htmlFor="exampleInputEmail1" className="form-label">
//        Email address
//      </label>
//  <input
//    type="email"
//    className="form-control"
//    id="exampleInputEmail1"
//    aria-describedby="emailHelp"
//    placeholder="Type your email"
//    ref={mailData}
//  />
//    </div>
//    <div className="mb-3">
//  <label htmlFor="exampleInputPassword1" className="form-label">
//    Password
//  </label>
//  <input
//    type="password"
//    className="form-control"
//    id="exampleInputPassword1"
//    placeholder="Type your password"
//    ref={passData}
//  />
//    </div>
//    <div className="mb-3 mx-3 w-100">
//      <Link to="/forgetPassword">Forget Password</Link>
//    </div>

//    <button type="submit" className="btn btn-primary w-100">
//      Signin
//    </button>
//    <div className="mt-3">
//      <Link to="/signup" className="btn btn-dark text-white w-100">
//        Sign up
//      </Link>
//    </div>
//  </form>;

//  <main className="d-flex w-100">
//       <div className="container d-flex flex-column">
//         <div className="row vh-100">
//           <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
//             <div className="d-table-cell align-middle">
//               <div className="text-center mt-4">
//                 <h1 className="h2">ابداء بالتسجيل</h1>
//                 <p className="lead">
//                   ابداء بالتسجيل فى الموقع لمشاهدة الفيدوهات
//                 </p>
//               </div>
//               <div className="card">
//                 <div className="card-body">
//                   <div className="m-sm-3">
//                     <form onSubmit={submitFormHandler}>
//                       <div className="mb-3">
//                         <label
//                           htmlFor="exampleInputEmail1"
//                           className="form-label"
//                         >
//                           Email address
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control form-control-lg"
//                           id="exampleInputEmail1"
//                           aria-describedby="emailHelp"
//                           placeholder="Enter Your Mail"
//                           ref={mailData}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label
//                           htmlFor="exampleInputPassword1"
//                           className="form-label"
//                         >
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="exampleInputPassword1"
//                           placeholder="Type your password"
//                           ref={passData}
//                         />
//                       </div>
//                       <div className="mb-3 mx-3 w-100">
//                         <Link to="/forgetPassword">Forget Password</Link>
//                       </div>

//                       <button type="submit" className="btn btn-primary w-100">
//                         Signin
//                       </button>
//                       <div className="mt-3">
//                         <Link
//                           to="/signup"
//                           className="btn btn-dark text-white w-100"
//                         >
//                           Sign up
//                         </Link>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
