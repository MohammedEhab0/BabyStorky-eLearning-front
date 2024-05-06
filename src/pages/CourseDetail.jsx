import React from "react";
import { Link } from "react-router-dom";
import CourseAuthor from "../components/Courses/CourseAttendees";
import Thumbnail from "../images/blog22.jpg";

const CourseDetail = () => {
  return (
    <section className="course-detail">
      <div className="container course-detail__container">
        <div className="courset-detail__header">
          <CourseAuthor />
          <div className="course-detail__buttons">
            <Link to={`/courses/authoridhere/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/courses/authoridhere/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the course </h1>
        <div className="course-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ea ex
          veritatis recusandae qui, culpa accusamus possimus numquam saepe
          ullam, animi ipsa dolorum est officiis odit deleniti iste eos
          reprehenderit
        </p>
      </div>
    </section>
  );
};

export default CourseDetail;
