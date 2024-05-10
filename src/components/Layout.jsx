import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
const Layout = () => {
  return (
    <>
      <Sidebar>
        <Header />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default Layout;
