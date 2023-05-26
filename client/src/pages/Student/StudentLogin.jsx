import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function loginStudent(ev) {
    ev.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      toast.error("Please fill all fields");
    } else if (password !== confirmPassword) {
      toast.error("Confirm password is not matched with password");
    } else {
      try {
        const { data } = await axios.post(
          "/student/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex justify-center items-center ">
        <form
          onSubmit={loginStudent}
          className="bg-primary_section p-7 rounded-xl flex flex-col justify-center items-center gap-2"
        >
          <div className="text-2xl text-primary_font_dark">
            Login for Student
          </div>

          <div className="w-full">
            Email
            <input
              type="text"
              value={email}
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              name="email"
              placeholder="Enter email "
            />
          </div>

          <div className="w-full">
            Password
            <input
              type="text"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              name="password"
              placeholder="......"
            />
          </div>
          <div>
            Confirm Password
            <input
              type="text"
              value={confirmPassword}
              onChange={(ev) => {
                setConfirmPassword(ev.target.value);
              }}
              name="confirmPassword"
              placeholder="......"
            />
          </div>
          <button>Login</button>
          <div>
            Don't have an account yet?{" "}
            <Link to={"/rector/register"} className="text-blue-600 ">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentLogin;
