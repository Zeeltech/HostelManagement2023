import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../UserContext";
import Loader from "../components/Loader";

import index from "../assets/Index.jpg";
import Header from "../components/Header";

function IndexPage() {
  const { user, setUser } = useContext(UserContext);

  if (user) {
    if (user.role == "Student") {
      console.log(user);
      return <Navigate to="/student/dashboard" />;
    } else if (user.role == "Rector") {
      return <Navigate to="/rector/dashboard" />;
    } else if (user.role == "Accountant") {
      return <Navigate to="/accountant/dashboard" />;
    }
  }

  return (
    <>
      <div className="workspace give_height">
        <div className="max-h-screen overflow-hidden">
          <Header />
          <img src={index} alt="index" className="w-full object-cover" />
          {/* <div className="   top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
        </div>
      </div>
    </>
  );
}

export default IndexPage;
