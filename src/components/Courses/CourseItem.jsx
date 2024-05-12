import React from "react";
import { Link } from "react-router-dom";
import CourseAttendees from "./CourseAttendees.jsx";
import "./Courses.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
const CourseItem = ({ courseID, thumbnail, title, desc, authorID }) => {
  return (
    <article className="course">
      <div className="course__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="course__content">
        <Link className="btn sm " to={`/courses/${courseID}/coursecontent`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <div className="course__footer">
          <Link to={`/courses/${courseID}/delete`} className="btn sm primary">
            <RiDeleteBin6Fill />
          </Link>
          <Link to={`/courses/${courseID}/edit`} className="btn sm primary">
            <FaEdit />
          </Link>
          <CourseAttendees />
        </div>
      </div>
    </article>
  );
};

export default CourseItem;
