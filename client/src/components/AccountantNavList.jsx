import React from "react";
import { Link } from "react-router-dom";

const AccountantNavList = () => {
  return (
    <ul className="md:flex md:items-center z-[-1] md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 opacity-0 py-4 pl-7 absolute bg-primary_section w-full left-0 top-[-400px] transition-all ease-in duration-300">
      <li className="mx-3 my-6 md:my-0">
        <a href="#" className="hover:text-primary_element duration-200 text-lg">
          Profile
        </a>
      </li>
      <li className="mx-3 my-6 md:my-0">
        <a href="#" className="hover:text-primary_element duration-200 text-lg">
          Notice
        </a>
      </li>
      <li className="mx-3 my-6 md:my-0">
        <a href="#" className="hover:text-primary_element duration-200 text-lg">
          Fine
        </a>
      </li>
      <li className="mx-3 my-6 md:my-0">
        <a href="#" className="hover:text-primary_element duration-200 text-lg">
          Student Info
        </a>
      </li>
      <div className="md:hidden block">
        <li className="mx-4 my-6 md:my-0 hover:text-primary_element text-lg">
          <Link className="cursor-pointer" to={"/logout"}>
            Log out
          </Link>
        </li>
      </div>
      <div className="md:block hidden">
        <li className="mx-3 my-6 md:my-0 hover:scale-95 hover:transition-all duration-75">
          <Link
            className="py-2 px-4 bg-primary_element text-white rounded-2xl cursor-pointer items-center"
            to={"/logout"}
          >
            Log out
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default AccountantNavList;
