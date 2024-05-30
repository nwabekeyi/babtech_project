import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from "../tempalates/button";
import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  const getHeaderText = (pathname) => {
    switch (pathname) {
      case '/':
        return 'HOME';
      case '/services':
        return 'SERVICES';
      case '/pricing':
        return 'PRICING';
      case '/contact':
        return 'CONTACT US';
      case '/support':
        return 'SUPPORT';
      case '/about':
        return 'ABOUT';
      default:
        return 'PAGE NOT FOUND';
    }
  };

  const headerText = getHeaderText(location.pathname);

  return (
    <div className="header">
      <h1>{headerText}</h1>
      <div className="head">
        <div className="logo">
          <h1>TUNE</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/pricing">PRICING</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            <li><Link to="/support">SUPPORT</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
          </ul>
        </nav>
        <div className="header-btn">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
