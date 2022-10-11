import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
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
        <Link className="btn btn-primary w-75" to={`/quiz/${id}`}>Start Now</Link>
      </div>
    </div>
  );
};

export default Course;
