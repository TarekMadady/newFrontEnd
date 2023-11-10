import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  // const [confirmpass, setConfirmPass] = useState(false);
  const fullName = useRef();
  const email = useRef();
  const pass = useRef();
  let navigate = useNavigate();
  function submitRegisterHandler(event) {
    event.preventDefault();
    const userName = fullName.current.value;
    const useremail = email.current.value;
    const password = pass.current.value;
    const userData = {
      fullname: userName,
      email: useremail,
      password: password,
    };
    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
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
        navigate("/firsttime", { replace: true });
      });
  }

  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">لنبدا بالتعلم </h1>
                <p className="lead">
                  سجل بياناتك هنا لتتمكن من دراسة المديولات التعليمية
                </p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form onSubmit={submitRegisterHandler}>
                      <div className="mb-3">
                        <label htmlFor="InputFullName" className="form-label">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="form-control form-control-lg"
                          id="InputFullName"
                          ref={fullName}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="InputEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="email@host"
                          className="form-control"
                          id="InputEmail"
                          ref={email}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="InputPassword" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          className="form-control"
                          id="InputPassword"
                          ref={pass}
                        />
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                        >
                          sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center mb-3" dir="rtl">
                تمتلك حساب ؟ <Link to="/signin">sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;

// <form onSubmit={submitRegisterHandler} className="mt-5">
//   <div className="mb-3">
// <label htmlFor="InputFullName" className="form-label">
//   Full Name
// </label>
// <input
//   type="text"
//   placeholder="Full Name"
//   className="form-control"
//   id="InputFullName"
//   ref={fullName}
// />
//   </div>
//   <div className="mb-3 mx-3 w-100">
// <label htmlFor="InputEmail" className="form-label">
//   Email
// </label>
// <input
//   type="email"
//   placeholder="email@host"
//   className="form-control"
//   id="InputEmail"
//   ref={email}
// />
//   </div>
//   <div className="mb-3 mx-3 w-100">
// <label htmlFor="InputPassword" className="form-label">
//   Password
// </label>
// <input
//   type="password"
//   placeholder="password"
//   className="form-control"
//   id="InputPassword"
//   ref={pass}
// />
//   </div>
//   <div className="mb-3 mx-3 w-100">
//     <label htmlFor="InputConfPassword" className="form-label">
//       Confirm Password
//     </label>
//     <input
//       type="password"
//       placeholder="password"
//       className="form-control"
//       id="InputConfPassword"
//     />
//   </div>
//   <button type="submit" className="btn btn-primary w-100">
//     SignUp
//   </button>
// </form>
