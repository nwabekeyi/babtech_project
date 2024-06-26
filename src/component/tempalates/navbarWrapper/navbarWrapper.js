import React from "react";
import Navbar from "../../navBar/navBar"; // Make sure you have the correct path to your Navbar component
import SupportNav from "../../supportNav/supportNav";
import { useLocation } from "react-router-dom";
import Footer from "../../footer/footer";

const pageWithNav = (wrappedComponent) => {
  const WithNavbar = (...props) => {
    return (
      <div>
        {useLocation.pathname === "/support" ? <SupportNav/> : <Navbar />

        }
        
        {wrappedComponent(...props)}

        <Footer />
      </div>
    );
  };
  return WithNavbar;
};

export default pageWithNav;
