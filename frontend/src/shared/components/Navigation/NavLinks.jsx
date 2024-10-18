/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className="nav-links list-none m-0 p-0 w-full h-full flex flex-col justify-center items-center md:flex-row">
      <li>
        <NavLink
          to="/users"
          className="border border-solid border-transparent text-gray-color   no-underline p-2 md:text-white"
        >
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/u1/places"
          className="border border-solid border-transparent text-gray-color   no-underline p-2 md:text-white"
        >
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/places/new"
          className="border border-solid border-transparent text-gray-color   no-underline p-2 md:text-white"
        >
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/auth"
          className="border border-solid border-transparent text-gray-color   no-underline p-2 md:text-white"
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
