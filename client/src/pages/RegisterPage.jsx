import React from "react";
import student from "../assets/Student.png";
import accountant from "../assets/Accountant.png";
import rector from "../assets/Rector.png";

function RegisterPage() {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-8">
        <span className="font-bold  text-xl">Select your role for Registration</span>
        <div className="bg-primary_section flex justify-center items-center gap-4 p-12 rounded-lg">
          <div className=" bg-black p-1 rounded-xl  flex flex-col gap-1 justify-center items-center">
            <img
              className="hover:scale-95 hover:transition-all hover:duration-200 cursor-pointer  object-cover aspect-square max-h-56"
              src={student}
            />
            <span className="text-primary_font_light hover:text-primary_element cursor-pointer">
              Student
            </span>
          </div>
          <div className=" bg-black p-1 rounded-xl  flex flex-col gap-1 justify-center items-center">
            <img
              className="hover:scale-95 hover:transition-all hover:duration-200 cursor-pointer  object-cover aspect-square max-h-56"
              src={rector}
            />
            <span className="text-primary_font_light hover:text-primary_element cursor-pointer">
              Rector
            </span>
          </div>
          <div className=" bg-black p-1 rounded-xl  flex flex-col gap-1 justify-center items-center">
            <img
              className="hover:scale-95 hover:transition-all hover:duration-200 cursor-pointer  object-cover aspect-square max-h-56"
              src={accountant}
            />
            <span className="text-primary_font_light hover:text-primary_element cursor-pointer">
              Accountant
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
