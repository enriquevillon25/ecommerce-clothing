import React from "react";
import "./Home.scss";
import ImageHome from "../../assets/images/image-home.jpg";
export const Home = () => {
  return (
    <div className="container">
      <img src={ImageHome} alt="image-home" style={{ width: "100%" }} />
    </div>
  );
};
