import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Course = ({ course }) => {
  const { id,name, total, logo } = course;
  return (
    <div className="course">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <div className="course-info">
        <h1>{name}</h1>
        <h5>Number of Questions: {total}</h5>
        <Link className="btn btn-primary w-75" to={`/quiz/${id}`}>Start Practice  <FontAwesomeIcon  style={{marginLeft:'5px'}} icon={faArrowRight} /> </Link>
      </div>
    </div>
  );
};

export default Course;
