import React from "react";
import Navbar from "../../navBar/navBar"; // Make sure you have the correct path to your Navbar component

const pageWithNav = (wrappedComponent) => {
  const WithNavbar = (...props) => {
    return (
      <div>
        <Navbar />
        {wrappedComponent(...props)}
      </div>
    );
  };
  return WithNavbar;
};

export default pageWithNav;
