import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// images
import LogoDark from "../assets/images/logo-dark.jpg";
import Moon from "../assets/images/moon-svgrepo-com.svg";
import Sun from "../assets/images/sun-svgrepo-com.svg";
import Cancel from "../assets/images/icons8-cancel.svg";
import Open from "../assets/images/icons8-menu.svg";

function Navbar() {
  const [lightMode, setLightMode] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);

  const body = document.querySelector("body");

  const handleDark = () => {
    body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
    setDarkMode(true);
    setLightMode(false);
  };

  const handleLight = () => {
    body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
    setLightMode(true);
    setDarkMode(false);
  };

  const mode = localStorage.getItem("mode");

  if (mode == "light") {
    useEffect(() => {
      handleLight();
    });
  } else if (mode == "dark") {
    useEffect(() => {
      handleDark();
    });
  }

  return (
    <div className="main-header">
      <div className="container">
        <div className="main-header-logo">
          <NavLink to="/">
            <img src={LogoDark} width="100px" height="100px" alt="" />
          </NavLink>
        </div>
        <ul className="main-header-items">
          <li className="main-header-item">
            <NavLink to="/">Bosh sahifa</NavLink>
          </li>

          <li className="main-header-item">
            <NavLink to="/products">Mebellar</NavLink>
          </li>
          <li className="main-header-item">
            <NavLink to="/contact">Bog'lanish</NavLink>
          </li>
          <li className="main-header-item">
            <NavLink to="/login">Kirish</NavLink>
          </li>
          <li className="main-header-item">
            <NavLink to="/register">Ro'yhatdan o'tish</NavLink>
          </li>
          {/* <li className="main-header-item">
            <NavLink to="/dashboard">Kabinetim</NavLink>
          </li> */}
        </ul>

        <ul
          className="main-header-responsive-icons hidden"
          style={{ listStyle: "none" }}
        >
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
        {responsiveNav ? (
          <ul
            className="main-header-responsive hidden"
            style={{ padding: "10px 0px" }}
          >
            <li className="main-header-item">
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li className="main-header-item">
              <NavLink to="/shop">Mebellar</NavLink>
            </li>
            <li className="main-header-item">
              <NavLink to="/contact">Bog'lanish</NavLink>
            </li>
            <li className="main-header-item">
              <NavLink to="/login">Kirish</NavLink>
            </li>
            <li className="main-header-item">
              <NavLink to="/register">Ro'yhatdan o'tish</NavLink>
            </li>
            {/* <li className="main-header-item">
            <NavLink to="/dashboard">Kabinetim</NavLink>
          </li> */}
          </ul>
        ) : (
          <></>
        )}
        <ul className="main-header-modes">
          <li
            className={
              lightMode ? "hidden" : "main-header-mode main-header-light"
            }
            onClick={() => handleLight()}
          >
            <img src={Sun} width="50px" height="50px" alt="" />
          </li>
          <li
            className={
              darkMode ? "hidden" : "main-header-mode main-header-dark"
            }
            onClick={() => handleDark()}
          >
            <img src={Moon} width="50px" height="50px" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
