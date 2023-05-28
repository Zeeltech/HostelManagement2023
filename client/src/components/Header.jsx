import { useContext, useState } from "react";
import logo from "../assets/logo2.png";
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
      ? (setMenuButtonToggel(false), list.classList.remove("top-[56px]"))
      : (setMenuButtonToggel(true),
        list.classList.add("top-[56px]"),
        list.classList.add("opacity-100"));
  }

  return (
    <div className="sticky py-2 shadow-md bg-bg_dark_section">
      <header className="md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center my-1 ">
          <Link
            to={"/"}
            className="flex items-center gap-2 cursor-pointer px-2"
          >
            <img
              className="p-1 h-10 w-10 border-2 border-bg_white bg-bg_white rounded-full"
              src={logo}
              alt=""
            />
            <span className="text-lg font-semibold text-bg_white_font">
              APC Nadiad
            </span>
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
                className="w-6 h-6 text-bg_white_font"
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
                  className="w-6 h-6 text-bg_white_font"
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
