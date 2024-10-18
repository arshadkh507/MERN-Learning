import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { useState } from "react";
// import { FaBars } from "react-icons/fa6";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandle = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn w-12 h-12  bg-transparent border-none cursor-pointer mr-8 flex flex-col justify-between direction md:hidden  "
          onClick={openDrawerHandle}
        >
          <span className="block w-12  bg-white "></span>
          <span className="block w-12  bg-white "></span>
          <span className="block w-12  bg-white "></span>
          {/* <FaBars /> */}
        </button>
        <h1 className="main-navigation__titlec text-white">
          <Link to="/" className="no-underline text-white-">
            Your Places
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
