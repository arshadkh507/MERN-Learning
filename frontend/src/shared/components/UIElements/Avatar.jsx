/* eslint-disable react/prop-types */

import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div
      className={`avatar h-full flex w-full justify-center items-center ${props.className}`}
      style={props.style}
    >
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
        className="block rounded-full w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
