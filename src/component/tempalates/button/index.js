import React from 'react';
import "./button.css";
import { useLocation } from 'react-router-dom';

function Button({ children, form }) {


    const buttonName = useLocation().pathname === "contact" ? "contact button" : "Request a demo"

    console.log(useLocation.pathname)
  return (
    <div className="button">
      <button>{form ? "Submit" : buttonName}</button>
      {React.Children.map(children, child => React.cloneElement(child))}
    </div>
  );
}

export default Button;

