import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../images/storkyLogo.png";
import { IoSettingsOutline } from "react-icons/io5";
import UserImg from "../../images/instructor-2.png";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlinePeopleOutline,
} from "react-icons/md";
import "./Sidebar.css";
const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "mycourses/:id",

      icon: <MdOutlineDashboard className="icon" />,
    },
    {
      path: "courses/users/:id",
      icon: <FaBook className="icon" />,
    },
    {
      path: "/MediaLibrary",
      icon: <ImBooks className="icon" />,
    },
    {
      path: "profile/:id",
      icon: <IoSettingsOutline className="icon" />,
    },
    {
      path: "/InviteUser",
      icon: <MdOutlinePeopleOutline className="icon" />,
    },
    {
      path: "/Instructor_User",
      icon: <MdLogout className="icon" />,
    },
  ];
  return (
    <>
      <sidebar className="sidebar">
        <div>
          <Link to="/">
            <img src={Logo} alt="Navbar Logo" className="img" />
          </Link>
        </div>

        <div className="links">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              <div className="icon">{item.icon}</div>
            </NavLink>
          ))}
        </div>
        <div>
          <Link to="/profile/useridhere">
            <img src={UserImg} className="img" alt="User Profile" />
          </Link>
        </div>
      </sidebar>
      <main className="main">{children}</main>
    </>
  );
};

export default Sidebar;
