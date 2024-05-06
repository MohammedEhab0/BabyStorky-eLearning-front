import React from "react";
import { Link } from "react-router-dom";
import CourseAttendees from "./CourseAttendees.jsx";
import "./Courses.css";

const CourseItem = ({ courseID, thumbnail, title, desc, authorID }) => {
  return (
    <article className="course">
      <div className="course__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="course__content">
        <Link className="btn sm " to={`/courses/${courseID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className="course__footer">
          <Link to={`/courses/${courseID}`} className="btn sm primary">
            Content
          </Link>
          <CourseAttendees />
        </div>
      </div>
    </article>
  );
};

export default CourseItem;
