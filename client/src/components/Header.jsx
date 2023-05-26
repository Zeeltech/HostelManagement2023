import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import RectorNavList from "./RectorNavList";
import AccountantNavList from "./AccountantNavList";
import StudentNavList from "./StudentNavList";
import BeforeLoginNavBtns from "./BeforeLoginNavBtns";

function Header() {
  const { rector, accountant, student } = useContext(UserContext);
  const [menuButtonToggel, setMenuButtonToggel] = useState(false);

  function menuToggel() {
    let list = document.querySelector("ul");

    // For menu button -> close button
    menuButtonToggel === true
      ? (setMenuButtonToggel(false), list.classList.remove("top-[80px]"))
      : (setMenuButtonToggel(true),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"));
  }

  return (
    <div className="p-5 bg-primary_section shadow-md">
      <header className="md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
            <img className="h-9 w-11 " src={logo} alt="" />
            <span className="font-bold text-2xl text-primary">APC Nadiad</span>
          </Link>
          {menuButtonToggel ? (
            // Menu-button icon
            <span
              className="text-3xl mx-2 cursor-pointer md:hidden block"
              onClick={menuToggel}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          ) : (
            <>
              {/* Close buttom icon */}
              <span
                className="text-3xl mx-2 cursor-pointer md:hidden block"
                onClick={menuToggel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            </>
          )}
        </div>

        {/* before log in */}
        {!rector && !accountant && !student && <BeforeLoginNavBtns />}
        {/* After login */}
        {rector && <RectorNavList />}
        {accountant && <AccountantNavList />}
        {student && <StudentNavList />}
      </header>
    </div>
  );
}

export default Header;
