import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  async function registerUser(ev) {
    ev.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      profilePhoto === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      toast.error("Please fill all fields");
    } else if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const formData = new FormData();

        formData.append("profilePhoto", profilePhoto);
        formData.append("name", name); // Add the name field
        formData.append("email", email); // Add the email field
        formData.append("password", password); // Add the password field
        formData.append("phone", phone); // Add the phone field

        await axios
          .post("/register", formData, {
            headers: { "Content-type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Registration Successful");
              setRedirect(true);
            }
          });
      } catch (err) {
        if (err.response.status === 409) toast.error("User already exists");
        console.log(err);
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="give-height flex justify-center items-center mt-6 text-bg_white_font font-semibold text-sm">
        <form
          onSubmit={registerUser}
          className="bg-bg_white text-bg_dark_font rounded-md shadow-lg shadow-bg_light_section border-2 border-bg_dark_section p-7 flex flex-col justify-center items-center gap-2"
        >
          <div className="text-xl mb-4">Register</div>
          <div className="w-full">
            Name
            <input
              type="text"
              value={name}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              name="name"
              placeholder="Enter your name"
            />
          </div>
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
            Mobile number
            <input
              type="text"
              value={phone}
              className="mt-1 mb-2"
              onChange={(ev) => {
                setPhone(ev.target.value);
              }}
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="w-full">
            Password
            <input
              type="password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              name="password"
              placeholder="Enter the password"
              className="mt-1 mb-2"
            />
          </div>
          <div className="w-full">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(ev) => {
                setConfirmPassword(ev.target.value);
              }}
              name="confirmPassword"
              placeholder="Repeat the password"
              className="mt-1 mb-2"
            />
          </div>
          <label className="flex flex-col w-full">
            <div className="flex items-center gap-4">
              Upload&nbsp;profile&nbsp;photo
              <input
                type="file"
                onChange={(ev) => {
                  setProfilePhoto(ev.target.files[0]);
                }}
                name="profilePhoto"
                className="hidden mt-1 mb-2"
              />
              <div className="mt-1 bg-bg_red hover:bg-bg_dark_section w-full p-1 rounded-md py-2 px-4 text-bg_white flex justify-center items-center cursor-pointer hover:scale-95 hover:transition-all duration-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>
            </div>
          </label>
          <button className="btn">Create an account</button>
          <div>
            Already have an account?{" "}
            <Link to={"/user/login"} className="text-blue-600 ">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserRegister;
