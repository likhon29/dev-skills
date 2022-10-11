import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";
import './Courses.css'
const Courses = () => {
  const allData = useLoaderData();
    const { data } = allData;
  return (
    <div className="course-container">
          {
              data.map(course=><Course course={course} key={course.id}></Course>)
          }
    </div>
  );
};

export default Courses;
