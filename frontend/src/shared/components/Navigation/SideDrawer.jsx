/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
const SideDrawer = (props) => {
  return createPortal(
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        onClick={props.onClick}
        className="side-drawer fixed top-0 left-0 z-100 w-70 h-screen bg-white"
      >
        {props.children}
      </aside>
    </CSSTransition>,
    document.getElementById("drawer-hook")
  );
};

export default SideDrawer;
