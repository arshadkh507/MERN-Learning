import ReactDOM from "react-dom";

import "./Backdrop.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="backdrop fixed top-0 left-0 w-full h-screen z-10"
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
