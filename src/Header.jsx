/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Header = ({ websiteName }) => {
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to={"/home"}>{websiteName}</NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="login-signup">
          <button className="log-in">Log in</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
