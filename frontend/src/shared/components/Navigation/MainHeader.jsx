/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const MainHeader = (props) => {
  return (
    <header className="main-header w-full h-16 flex items-center  bg-bg-red py-0 px-4 fixed top-0 left-0 z-5 md:justify-between ">
      {props.children}
    </header>
  );
};

export default MainHeader;
