// package
import { NavLink } from "react-router-dom";
import { useState } from "react";

// images
import Cancel from "../../assets/images/icons8-cancel.svg";
import Open from "../../assets/images/icons8-menu.svg";

function DashboardNavbar() {
  const [responsiveNav, setResponsiveNav] = useState(false);

  return (
    <div className="dashboard-navbar">
      <div className="container">
        <ul className="dashboard-navbar-items">
          <li className="dashboard-navbar-item">
            <NavLink to="/dashboard/clients">Mening mijozlarim</NavLink>
          </li>
          <li className="dashboard-navbar-item">
            <NavLink to="/dashboard/settings">Sozlamalar</NavLink>
          </li>
          <li className="dashboard-navbar-item">
            <NavLink to="/dashboard/add">Qo'shish</NavLink>
          </li>
          <li className="dashboard-navbar-item">
            <NavLink to="/dashboard/basket">Savatcham</NavLink>
          </li>
          <li className="dashboard-navbar-item">
            <p
              className="description"
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.setItem("login", "false");
                location.href = "/";
              }}
            >
              Chiqish
            </p>
          </li>
        </ul>

        <div className="dashboard-res">
          <ul className="hidden dashboard-navbar-res">
            {responsiveNav ? (
              <li
                className="main-header-responsive-icon cancel"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={Cancel}
                  alt=""
                  onClick={() => setResponsiveNav(false)}
                />
              </li>
            ) : (
              <li
                className="main-header-responsive-icon open"
                style={{ cursor: "pointer" }}
              >
                <img src={Open} alt="" onClick={() => setResponsiveNav(true)} />
              </li>
            )}
          </ul>
          <ul
            className={
              responsiveNav
                ? "dashboard-navbar-responsive"
                : "dashboard-navbar-responsive hidden"
            }
          >
            <li className="dashboard-navbar-item">
              <NavLink to="/dashboard/clients">Mening mijozlarim</NavLink>
            </li>
            <li className="dashboard-navbar-item">
              <NavLink to="/dashboard/settings">Sozlamalar</NavLink>
            </li>
            <li className="dashboard-navbar-item">
              <NavLink to="/dashboard/add">Qo'shish</NavLink>
            </li>
            <li className="dashboard-navbar-item">
              <NavLink to="/dashboard/basket">Savatcham</NavLink>
            </li>
            <li className="dashboard-navbar-item">
              <p
                className="description"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  localStorage.setItem("login", "false");
                  location.href = "/";
                }}
              >
                Chiqish
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
