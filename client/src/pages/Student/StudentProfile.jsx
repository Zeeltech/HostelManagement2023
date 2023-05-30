import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
import StudentProfilePhoto from "../../components/StudentProfilePhoto";
import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import StudentProfileEditPopUp from "../../components/StudentProfileUpdatePopUp";

function StudentProfile() {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  if (!user || (user && user.role !== "Student")) {
    return <Navigate to="/login" />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  /*LOGOUT */
  async function logoutHandel(ev) {
    ev.preventDefault();
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  return (
    <>
      <div className="flex justify-center items-center give_height ">
        <div className="bg-gray-100 inline-flex p-7 rounded-lg  shadow-md shadow-indigo-500/50   m-auto w-fit flex-col gap-2 justify-center items-center">
          <StudentProfilePhoto />
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <StudentProfileEditPopUp />
          <button className="btn" onClick={logoutHandel}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default StudentProfile;