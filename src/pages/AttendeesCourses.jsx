import React from "react";
import { useState } from "react";
import CourseItem from "../components/Courses/CourseItem.jsx";
import { DUMMY_COURSES } from "../data.js";
import { Link } from "react-router-dom";
import "./../components/Courses/Courses.css";
const AttendeesCourses = () => {
  const [courses, setCourses] = useState(DUMMY_COURSES);
  return (
    <section>
      <div className="course-header">
        <Link className="btn primary +" to={"/create"}>
          +
        </Link>
      </div>
      {courses.length > 0 ? (
        <div className="courses__container">
          {courses.map((course) => (
            <CourseItem
              key={course.id}
              postID={course.id}
              thumbnail={course.thumbnail}
              category={course.category}
              title={course.title}
              desc={course.desc}
              authorID={course.authorID}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="course-header">
            <Link className="btn-1" to={"create"}>
              +
            </Link>
          </div>
          <h2 className="center">No courses Founded</h2>
        </>
      )}
    </section>
  );
};

export default AttendeesCourses;
