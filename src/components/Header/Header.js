import React from "react";
import "./Header.css";
import MyImage from "../../images/header-img.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className=" header d-flex">
      <div className="header-img m-0">
        <img src={MyImage} width="100%"alt="" />
      </div>
      <div className="header-info">
        <h1 style={{color:'orangered'}}> Learn & Works Hard without limits</h1>
        <p className="">
          Dev Skill is a platform for IT professionals. You can join us to get
          latest updates on our courses, events, blog posts etc. Here, more than
          10 courses for develop your real life experience and skills
        </p>
        <Link to="" className="btn btn-primary">
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
