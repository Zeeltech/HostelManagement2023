import { Outlet } from "react-router-dom";

import React from "react";
import Header from "./components/Header";

function Layout() {
  return (
    <div>
      <Header />
      <div className="m-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
