import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./components/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
