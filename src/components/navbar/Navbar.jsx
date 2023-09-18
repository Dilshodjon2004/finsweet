import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/home/main-logo.svg";
import { styles } from "../../util/style";
import { NavigationLinks } from "../../util/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggleNav, setToggleNav] = useState(false);
  const activeHandler = (id) => {
    setActive(id);
  };

  const toggleHandler = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="bg-bgBlue">
      <div className={`${styles.container}  py-[30px] ${styles.flexBetween}`}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Nav links */}
        <ul
          className={`${styles.flexBetween} space-x-10 list-none md:flex hidden`}
        >
          {NavigationLinks.map((element, id) => (
            <Link to={`${element.url}`}>
              <li
                className={`${
                  active === element.id ? " text-white" : "text-bgLightGrey"
                } ${
                  element.id === "contact"
                    ? `${styles.btnContact} text-white`
                    : ""
                } transition-all duration-500`}
                key={element.id}
                onClick={() => activeHandler(element.id)}
              >
                {element.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Navigation window */}
        <div className={`md:hidden flex flex-1 justify-end items-center`}>
          {toggleNav ? (
            <AiOutlineClose
              className="text-white text-[30px] font-bold"
              onClick={toggleHandler}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white text-[30px] font-bold"
              onClick={toggleHandler}
            />
          )}

          <div
            className={`${
              !toggleNav ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-bgBlue z-[5]`}
          >
            <ul className="list-none flex flex-col justify-center items-center flex-1 sm:flex-row">
              {NavigationLinks.map((element, id) => (
                <li
                  key={element.id}
                  className={`${
                    active === element.id ? " text-white" : "text-bgLightGrey"
                  } font-poppins font-normal cursor-pointer text-[18px] mr-0 sm:mr-10 hover:text-white transition-all duration-500`}
                  onClick={() => activeHandler(element.id)}
                >
                  <Link to={`${element.url}`}>{element.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
