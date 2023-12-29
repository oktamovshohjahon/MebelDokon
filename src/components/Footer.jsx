import { NavLink } from "react-router-dom";

// socials
import Instagram from "../assets/images/instagram-2-1-logo-svgrepo-com.svg";
import Facebook from "../assets/images/facebook-3-logo-svgrepo-com.svg";
import Telegram from "../assets/images/telegram-svgrepo-com.svg";
import YouTube from "../assets/images/youtube-color-svgrepo-com.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul className="footer-items">
          <li className="footer-item">
            <NavLink to="/">Bosh sahifa</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/shop">Mebellar</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/contact">Bog'lanish</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/login">Kirish</NavLink>
          </li>
          <li className="footer-item">
            <NavLink to="/register">Ro'yhatdan o'tish</NavLink>
          </li>
        </ul>
        <ul className="footer-socials">
          <li className="footer-social">
            <NavLink to="/">
              <img src={Facebook} alt="" />
            </NavLink>
          </li>
          <li className="footer-social">
            <NavLink to="/shop">
              <img src={Instagram} alt="" />
            </NavLink>
          </li>
          <li className="footer-social">
            <NavLink to="/contact">
              <img src={Telegram} alt="" />
            </NavLink>
          </li>
          <li className="footer-social">
            <NavLink to="/login">
              <img src={YouTube} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
