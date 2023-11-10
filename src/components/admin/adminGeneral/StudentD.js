import React from "react";
import studentimg from "./student.svg";
import { Link } from "react-router-dom";

const StudentD = (props) => {
  // const R = props.firstTime;
  console.log(props.cdate);

  // const mydate = new Date(props.cdate);
  // const Month = mydate.getMonth();

  // console.log(mydate);
  // console.log(Month);
  // const month = mydate.getMonth();
  // console.log(month);
  // const day = mydate.getDate();
  // const year = mydate.getFullYear();
  return (
    <div className="container-fluid p-0">
      <div className="mb-3">
        <h1 className="h3 d-inline align-middle">Profile</h1>
        <a className="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
          All Data For Student
        </a>
      </div>
      <div className="row">
        <div className="col-md-4 col-xl-3">
          <div className="card mb-3">
            <div className="card-header">
              <h5 className="card-title mb-0">{props.name}</h5>
            </div>
            <div className="card-body text-center">
              <img
                src={studentimg}
                alt="Christina Mason"
                className="img-fluid rounded-circle mb-2"
                width="128"
                height="128"
              />
              <h5 className="card-title mb-0">{props.name}</h5>
              <div className="text-muted mb-2">طالب</div>

              <div>
                {props.firstTime ? (
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/student/deactive/${props.id}`}
                  >
                    الغاء التفعيل
                  </Link>
                ) : (
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/student/active/${props.id}`}
                  >
                    تفعيل
                  </Link>
                )}
              </div>
            </div>
            <hr className="my-0" />
            {props.firstTime ? (
              <div className="card-body">
                <h5 className="h6 card-title">Skills</h5>
                الاكونت حديث ولم يتم الانضمام الى اى كورس
              </div>
            ) : (
              <div className="card-body">
                <h5 className="h6 card-title">Skills</h5>
                <Link className="badge bg-primary me-1 my-1">HTML</Link>
                <Link className="badge bg-primary me-1 my-1">JavaScript</Link>
                <Link className="badge bg-primary me-1 my-1">Sass</Link>
                <Link className="badge bg-primary me-1 my-1">Angular</Link>
                <Link className="badge bg-primary me-1 my-1">Vue</Link>
                <Link className="badge bg-primary me-1 my-1">React</Link>
                <Link className="badge bg-primary me-1 my-1">Redux</Link>
                <Link className="badge bg-primary me-1 my-1">UI</Link>
                <Link className="badge bg-primary me-1 my-1">UX</Link>
              </div>
            )}
            <hr className="my-0" />
            <div className="card-body">
              <h5 className="h6 card-title">الامتحان القبلى</h5>
              <ul className="list-unstyled mb-0">
                {props.prexam ? (
                  <li className="mb-1">
                    <span
                      data-feather="home"
                      className="feather-sm me-1"
                    ></span>
                    Degree: <Link>80%</Link>
                  </li>
                ) : (
                  <li className="mb-1">
                    <span
                      data-feather="home"
                      className="feather-sm me-1"
                    ></span>
                    لم يجتاز الامتحان القبلى
                  </li>
                )}
              </ul>
            </div>
            <hr className="my-0" />
          </div>
        </div>

        <div className="col-md-8 col-xl-9">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">الكورسات</h5>
            </div>
            لم يختر اى كورس حتى الان
            {/* <div className="card-body h-100">
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar-5.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Vanessa Tucker"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">5m ago</small>
                  <strong>Vanessa Tucker</strong> started following{" "}
                  <strong>Christina Mason</strong>
                  <br />
                  <small className="text-muted">Today 7:51 pm</small>
                  <br />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Charles Hall"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">30m ago</small>
                  <strong>Charles Hall</strong> posted something on{" "}
                  <strong>Christina Mason</strong>'s timeline
                  <br />
                  <small className="text-muted">Today 7:21 pm</small>
                  <div className="border text-sm text-muted p-2 mt-1">
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante.
                  </div>
                  <a href="#" className="btn btn-sm btn-danger mt-1">
                    <i className="feather-sm" data-feather="heart"></i> Like
                  </a>
                </div>
              </div>

              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar-4.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Christina Mason"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">1h ago</small>
                  <strong>Christina Mason</strong> posted a new blog
                  <br />
                  <small className="text-muted">Today 6:35 pm</small>
                </div>
              </div>

              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar-2.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="William Harris"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">3h ago</small>
                  <strong>William Harris</strong> posted two photos on{" "}
                  <strong>Christina Mason</strong>'s timeline
                  <br />
                  <small className="text-muted">Today 5:12 pm</small>
                  <div className="row g-0 mt-1">
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        src="img/photos/unsplash-1.jpg"
                        className="img-fluid pe-2"
                        alt="Unsplash"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <img
                        src="img/photos/unsplash-2.jpg"
                        className="img-fluid pe-2"
                        alt="Unsplash"
                      />
                    </div>
                  </div>
                  <a href="#" className="btn btn-sm btn-danger mt-1">
                    <i className="feather-sm" data-feather="heart"></i> Like
                  </a>
                </div>
              </div>

              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar-2.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="William Harris"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">1d ago</small>
                  <strong>William Harris</strong> started following{" "}
                  <strong>Christina Mason</strong>
                  <br />
                  <small className="text-muted">Yesterday 3:12 pm</small>
                  <div className="d-flex align-items-start mt-1">
                    <a className="pe-3" href="#">
                      <img
                        src="img/avatars/avatar-4.jpg"
                        width="36"
                        height="36"
                        className="rounded-circle me-2"
                        alt="Christina Mason"
                      />
                    </a>
                    <div className="flex-grow-1">
                      <div className="border text-sm text-muted p-2 mt-1">
                        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                        id, lorem. Maecenas nec odio et ante tincidunt tempus.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar-4.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Christina Mason"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">1d ago</small>
                  <strong>Christina Mason</strong> posted a new blog
                  <br />
                  <small className="text-muted">Yesterday 2:43 pm</small>
                </div>
              </div>

              <hr />
              <div className="d-flex align-items-start">
                <img
                  src="img/avatars/avatar.jpg"
                  width="36"
                  height="36"
                  className="rounded-circle me-2"
                  alt="Charles Hall"
                />
                <div className="flex-grow-1">
                  <small className="float-end text-navy">1d ago</small>
                  <strong>Charles Hall</strong> started following{" "}
                  <strong>Christina Mason</strong>
                  <br />
                  <small className="text-muted">Yesterdag 1:51 pm</small>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentD;
