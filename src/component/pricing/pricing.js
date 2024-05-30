import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import React from 'react';
import './pricing.css'
import image from "../pricing/assets/mu3.png";





// import Button from "../tempalates/button";


const Component = () => {
  return (
    <div className="price-container">
     {/* <p className="p">THIS IS PRICE PAGE</p> */}
     


     <img src={image} alt="" className="price-image" />
    </div>
  );
};

const Pricing = pageWithNav(Component);

export default Pricing;
