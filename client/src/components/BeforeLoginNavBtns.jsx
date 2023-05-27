import React from "react";
import { Link } from "react-router-dom";

const BeforeLoginNavBtns = () => {
  return (
    <>
      <div className="md:hidden block">
        <ul className=" opacity-0 py-4 pl-7 absolute bg-primary_section w-full left-0 top-[-400px] transition-all ease-in duration-300">
          <li className="mx-2 my-6 md:my-0 hover:text-primary_element text-lg">
            <Link className="py-2 px-4" to={"/login"}>
              Log in
            </Link>
          </li>
          <li className="mx-2 my-6 md:my-0 hover:text-primary_element text-lg">
            <Link className="py-2 px-4" to={"/singup"}>
              Get started
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:block hidden">
        <ul className="py-3 flex w-full">
          <li className="mx-1 my-6 md:my-0 hover:scale-95 hover:transition-all duration-75">
            <Link
              className="py-3 px-3 font-semibold text-md bg-bg_white text-bg_dark_font border-2 border-bg_light_section rounded-md items-center hover:bg-bg_red duration-200 hover:border-bg_red hover:text-bg_white_font"
              to={"/login"}
            >
              Log In
            </Link>
          </li>
          <li className="mx-2 my-6 md:my-0 hover:scale-95 hover:transition-all duration-75">
            <Link
              className="py-3 px-3 font-semibold text-md bg-bg_white text-bg_dark_font border-2 border-bg_light_section rounded-md items-center hover:bg-bg_red duration-200 hover:border-bg_red hover:text-bg_white_font"
              to={"/register"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BeforeLoginNavBtns;
