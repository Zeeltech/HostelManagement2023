import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function RectorSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function registerRector(ev) {
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
      toast.error("Password and Confirm Password is not matched");
    } else {
      try {
        const profilePhotoName = profilePhoto.split("\\").pop();
        const formData = new FormData();
        formData.append("profilePhoto", profilePhotoName);
        console.log(formData);
        const { data } = await axios.post("/rector/register", {
          name,
          email,
          phone,
          password,
          profilePhoto:profilePhotoName,
          formData,
        });
        // if (data.message === "register successfull")
        //   toast.success("Registration Successfull");
      } catch (err) {
        console.log(err + " -> from rector register page");
        toast.error("Registration failed");
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex justify-center items-center ">
        <form
          onSubmit={registerRector}
          className="bg-primary_section p-7 rounded-xl flex flex-col justify-center items-center gap-2"
        >
          <div className="text-2xl text-primary_font_dark">
            Create an account for Rector
          </div>
          <div className="w-full">
            Name
            <input
              type="text"
              value={name}
              onChange={(ev) => {
                setName(ev.target.value);
              }}
              name="name"
              placeholder="Mehul chovatiya"
            />
          </div>
          <div className="w-full">
            email
            <input
              type="text"
              value={email}
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              name="email"
              placeholder="abc2001@gmail.com"
            />
          </div>
          <div className="w-full">
            Mobile number
            <input
              type="text"
              value={phone}
              onChange={(ev) => {
                setPhone(ev.target.value);
              }}
              name="phone"
              placeholder="0123456789"
            />
          </div>

          <label className="flex flex-col w-full">
            Upload profile profilePhoto
            <input
              type="file"
              value={profilePhoto}
              onChange={(ev) => {
                setProfilePhoto(ev.target.value);
              }}
              name="profilePhoto"
              className="hidden "
            />
            <div className="mt-1 bg-primary_element w-full p-1 rounded-xl flex justify-center items-center cursor-pointer hover:scale-95 hover:transition-all duration-75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
          </label>
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
          <button>Create an account</button>
          <div>
            Already have an account?{" "}
            <Link to={"/rector/login"} className="text-blue-600 ">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RectorSignup;
