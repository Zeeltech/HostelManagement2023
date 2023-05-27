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
        await axios
          .post(
            "/student/login",
            {
              email,
              password,
            },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.status === 201) {
              toast.success("Login successful");
            }
          });
      } catch (err) {
        if (err.response.status === 401)
          toast.error("Email or Password incorrect");
        else if (err.response.status === 404)
          toast.error("User does not exists");
        console.log(err);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="give-height flex justify-center items-center mt-24 text-bg_white_font font-semibold text-sm">
        <form
          onSubmit={loginStudent}
          className="bg-bg_white text-bg_dark_font rounded-md shadow-lg shadow-bg_light_section border-2 border-bg_dark_section p-7 flex flex-col justify-center items-center gap-2"
        >
          <div className="text-xl mb-4">Login for Student</div>

          <div className="w-full">
            Email
            <input
              type="text"
              value={email}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              name="email"
              placeholder="Enter your email "
            />
          </div>

          <div className="w-full">
            Password
            <input
              type="password"
              value={password}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              name="password"
              placeholder="Enter the password"
            />
          </div>
          <div>
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setConfirmPassword(ev.target.value);
              }}
              name="confirmPassword"
              placeholder="Repeat the password"
            />
          </div>
          <button className="btn">Login</button>
          <div>
            Don't have an account yet?{" "}
            <Link to={"/student/register"} className="text-blue-600 ">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentLogin;
