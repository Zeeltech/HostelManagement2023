import React from "react";
import { Link } from "react-router-dom";

const BeforeLoginNavBtns = () => {
  return (
    <>
      <div className="md:hidden block">
        <ul className="md_nav opacity-0 py-4 pl-7 absolute bg-primary_section w-full left-0 top-[-400px] transition-all ease-in duration-300">
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
        <ul className="md_nav opacity-0 py-4 pl-7 absolute bg-primary_section w-full left-0 top-[-400px] transition-all ease-in duration-300">
          <li className="mx-2 my-6 md:my-0 hover:scale-95 hover:transition-all duration-75">
            <Link
              className="py-2 px-4 border-2 border-primary_element rounded-2xl items-center"
              to={"/login"}
            >
              Log in
            </Link>
          </li>
          <li className="mx-2 my-6 md:my-0 hover:scale-95 hover:transition-all duration-75">
            <Link
              className="py-2 px-4 bg-primary_element text-white rounded-2xl items-center"
              to={"/singup"}
            >
              Get started
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BeforeLoginNavBtns;
