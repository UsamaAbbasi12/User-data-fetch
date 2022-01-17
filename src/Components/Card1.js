import React from "react";
import "../styles/Card1.scss";
import img from "../images/placeholder.jpg";
function Card1(props) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="user-data">
        <p className="name">{props.name}</p>
        <p className="email">{props.email}</p>
      </div>
    </div>
  );
}

export default Card1;
