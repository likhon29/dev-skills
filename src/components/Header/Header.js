import React from "react";
import "./Header.css";
import MyImage from "../../images/header-img.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" header d-flex">
          <div className="header-info">
              
        <h1>Learn without limits</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
          eos commodi laborum sunt animi amet. Incidunt aliquam blanditiis
          voluptatem unde fugiat commodi adipisci voluptatum! Ea consectetur
          molestiae est sed?
              </p>
              <Link to="" className="btn btn-primary">Get Started</Link>
      </div>
      
      <div className="header-img">
        <img src={MyImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
