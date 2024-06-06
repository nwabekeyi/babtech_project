import React from "react";
import cardData from "./data";
import pageWithNav from "../tempalates/navbarWrapper/navbarWrapper";
import "./pricing.css";
import image from "../../assets/djjjj.png";

function Component() {
  return (
    <div className="card-container">
      <div className="flex">
        <img src={image} alt="" className="pricing-image" />
        <h3 className="h31">DJ BEAT</h3>
        <div className="h32">
          <h3>DJ BEAT</h3>
          <h3>PRICE LIST</h3>
          <h6>*Higher packages inlcude items from previous</h6>
          <hr className="hr1" />
        </div>
      </div>

      <div className="flex2">
        <hr className="hr2" />
        <h5 className="dj1">info@djbeat.com</h5>
        <h5 className="dj2">@DJBeat</h5>
        <h5 className="dj3">www.djbeat.com</h5>
      </div>
      {cardData.map(card => (
        <div
          key={card.id}
          // imageUrl={card.imageUrl}
        >
          <div className="good">
            <p className="card1">{card.plan}</p>
            <p className="card2">{card.amount}</p>
            <hr className="hr3" />
            <h5 className="card3">{card.feature1}</h5>
            <h5>{card.feature2}</h5>
            <h5>{card.feature3}</h5>
            <p className="card3">{card.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Pricing = pageWithNav(Component);

export default Pricing;
