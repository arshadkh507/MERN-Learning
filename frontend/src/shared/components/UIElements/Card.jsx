/* eslint-disable react/prop-types */

import "./Card.css";

const Card = (props) => {
  return (
    <div
      className={`card m-0 rounded-md p-4 bg-white overflow-hidden ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
