import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/storkyLogo.png";
import { MdNotificationsActive } from "react-icons/md";
import UserImg from "../../images/avatar1.jpg";
import "./Header.css";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(
    window.innerWidth > 800 ? true : false
  );
  const closeNavHandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true);
    }
  };

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" className="logo" />
        </Link>
        {isNavShowing && (
          <ul className="nav__menu">
            <li>
              <Link to="/profile/useridhere" onClick={closeNavHandler}>
                <img src={UserImg} className="nav__logo pro " />
              </Link>
            </li>
            <li>
              <MdNotificationsActive className="nav__not active" />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
