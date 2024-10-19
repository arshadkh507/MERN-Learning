/* eslint-disable react/prop-types */
import "./Map.css";
const Map = (props) => {
  return (
    <div
      className={`map w-full bg-orange-400 h-full p-4 text-black font-bold ${props.className}`}
      style={props.style}
    >
      <h2>Google Map need credit card that&apos;s why leaved this portion.</h2>
    </div>
  );
};

export default Map;
