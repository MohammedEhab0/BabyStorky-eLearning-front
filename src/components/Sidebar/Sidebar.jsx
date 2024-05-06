import React, { useState } from "react";
import { FaBars, FaBook } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineDashboard,
  MdLogout,
  MdOutlinePeopleOutline,
} from "react-icons/md";
import "./Sidebar.css";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "mycourses/:id",
      name: "Dashboard",
      icon: <MdOutlineDashboard className="icon" />,
    },
    {
      path: "courses/users/:id",
      name: "Courses",
      icon: <FaBook className="icon" />,
    },
    {
      path: "/create",
      name: "create",
      icon: <ImBooks className="icon" />,
    },
    {
      path: "profile/:id",
      name: "Settings",
      icon: <IoSettingsOutline className="icon" />,
    },
    {
      path: "/Attendees",
      name: "Attendees",
      icon: <MdOutlinePeopleOutline className="icon" />,
    },
    {
      path: "/register",
      name: "Logout",
      icon: <MdLogout className="icon" />,
    },
  ];
  return (
    <>
      <sidebar className="sidebar-1">
        <div>
          <div style={{ width: isOpen ? "12rem" : "3rem" }} className="sidebar">
            <div className="top_section" onClick={toggle}>
              <div className="logo-bars">
                <FaBars
                  className="icon"
                  onClick={toggle}
                  style={{ width: isOpen ? "12rem" : "4.3rem" }}
                />
              </div>
            </div>
            <div className="links">
              {menuItem.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="link"
                  activeclassName="active"
                >
                  <div className="icon" onClick={toggle}>
                    {item.icon}
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </sidebar>
      <main className="main">{children}</main>
    </>
  );
};

export default Sidebar;
