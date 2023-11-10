import React from "react";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import "./app.css";
// import avatar2 from "./avatars/avatar-2.jpg";
// import avatar3 from "./avatars/avatar-3.jpg";
// import avatar4 from "./avatars/avatar-4.jpg";
// import avatar5 from "./avatars/avatar-5.jpg";
// import avatar from "./avatars/avatar.jpg";
import AdminBar from "./AdminBar";
// import myScriptjs from "./jsapp.js";

const AdminHeader = (props) => {
  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" to="index.html">
            <span className="align-middle">موقع للتعليم</span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Pages</li>

            <li className="sidebar-item active">
              <Link className="sidebar-link" to="/admin">
                <i className="align-middle" data-feather="sliders"></i>
                <span className="align-middle">Dashboard</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/profile">
                <i className="align-middle" data-feather="user"></i>
                <span className="align-middle">Profile</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="">
                <i className="align-middle" data-feather="log-in"></i>
                <span className="align-middle">تغير كلمة السر</span>
              </Link>
            </li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="">
                <i className="align-middle" data-feather="book"></i>
                <span className="align-middle">تحديث</span>
              </Link>
            </li>

            <li className="sidebar-header">الطلاب</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/student/all">
                <i className="align-middle" data-feather="square"></i>
                <span className="align-middle">كل الطلاب</span>
              </Link>
            </li>

            <li className="sidebar-header">الامتحانات</li>

            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/exam">
                <i className="align-middle" data-feather="bar-chart-2"></i>
                <span className="align-middle">الامتحانات كلها</span>
              </Link>
            </li>
            <li className="sidebar-header">المديولات التعليمية</li>
            <li className="sidebar-item">
              <Link className="sidebar-link" to="/admin/track">
                <i className="align-middle" data-feather="bar-chart-2"></i>
                <span className="align-middle">المديولات التعليمية كلها</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="main">
        <AdminBar />
        <main className="container-fluid p-0">{props.children}</main>
        <footer className="footer mt-auto">
          <div className="container-fluid">
            <div className="row text-muted">
              <div className="col-6 text-start">
                <p className="mb-0">
                  <Link className="text-muted" to="#" target="_blank">
                    <strong>موقع تعليمى</strong>
                  </Link>
                  -
                  <Link className="text-muted" to="#" target="_blank">
                    <strong>غادة رسلان</strong>
                  </Link>
                  &copy;
                </p>
              </div>
              <div className="col-6 text-end">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link className="text-muted" to="" target="_blank">
                      Support
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-muted" to="#" target="_blank">
                      Help Center
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link className="text-muted" to="#" target="_blank">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminHeader;
