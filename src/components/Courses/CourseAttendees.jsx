import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../images/avatar1.jpg";
import "./Courses.css";

const CourseAttendees = () => {
  return (
    <Link to={`/courses/users/attendees`} className="course__author">
      <div className="course__author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="courset__author-details">
        <h5>By: Logan </h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default CourseAttendees;
