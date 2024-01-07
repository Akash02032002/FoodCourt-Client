import React from "react";
import "./Success.css";
import { NavLink } from "react-router-dom";
import img from "./img/tick.png";

const Success = () => {
  return (
    <div className="box1">
      <img src={img} alt="logo" />
      <h2>Thank You!</h2>
      <p>
        <span>Your payment has successfully done.</span>
        <br />
        <span>Enjoy your Food.</span>
      </p>
      <br />
      <div className="box2">
        <NavLink to="/">
          <button type="button">Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Success;
