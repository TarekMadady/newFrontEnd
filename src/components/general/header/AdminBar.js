import React from "react";
import { Link } from "react-router-dom";
const AdminBar = () => {
  const username = localStorage.getItem("userName");
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg ">
      <Link className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </Link>

      <div className="navbar-collapse collapse" style={{ marginLeft: "85%" }}>
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown ">
            <Link
              className="nav-icon dropdown-toggle d-inline-block d-sm-none"
              to="#"
              data-bs-toggle="dropdown"
            >
              <i className="align-middle" data-feather="settings"></i>
            </Link>

            <Link
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              to="#"
              data-bs-toggle="dropdown"
            >
              <span className="text-dark">{username}</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-end px-3">
              <Link className="dropdown-item text-left" to="pages-profile.html">
                <i className="align-middle me-1" data-feather="user"></i>
                Profile
              </Link>

              <div className="dropdown-divider"></div>
              <Link className="dropdown-item text-left" to="index.html">
                <i className="align-middle me-1" data-feather="settings"></i>
                Settings & Privacy
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item me-1 text-left" to="/logout">
                Log out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminBar;
