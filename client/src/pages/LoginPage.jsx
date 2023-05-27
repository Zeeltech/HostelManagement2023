import React from "react";
import student from "../assets/Student.png";
import accountant from "../assets/Accountant.png";
import rector from "../assets/Rector.png";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="h-[80vh] flex justify-center items-center flex-col gap-8">
        <span className="font-semibold text-2xl labels p-4">
          Select your role to login
        </span>
        <div className="flex justify-center items-center gap-4 p-4 rounded-lg">
          <Link
            to="/rector/login"
            className="labels p-4 flex flex-col gap-1 justify-center items-center text-bg_dark_font red-hover"
          >
            <img
              className="cursor-pointer  object-cover aspect-square max-h-48 rounded-full border-4 border-bg_white"
              src={rector}
            />
            <span className="font-semibold cursor-pointer">Rector</span>
          </Link>
          <Link
            to="/accountant/login"
            className="labels p-4 flex flex-col gap-1 justify-center items-center text-bg_dark_font red-hover"
          >
            <img
              className="cursor-pointer object-cover aspect-square max-h-48 rounded-full border-4 border-bg_white"
              src={accountant}
            />
            <span className="font-semibold cursor-pointer">Accountant</span>
          </Link>
          <Link
            to="/student/login"
            className="labels p-4 flex flex-col gap-1 justify-center items-center text-bg_dark_font red-hover"
          >
            <img
              className="cursor-pointer  object-cover aspect-square max-h-48 rounded-full border-4 border-bg_white"
              src={student}
            />
            <span className="font-semibold cursor-pointer">Student</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
