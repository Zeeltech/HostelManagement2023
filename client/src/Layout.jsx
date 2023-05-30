import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../UserContext";
import Loader from "./components/Loader";

function Layout() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 justify-center items-center mx-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
