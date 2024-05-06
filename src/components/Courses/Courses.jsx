import React from "react";
import { useState } from "react";
import CourseItem from "./CourseItem.jsx";
import { DUMMY_COURSES } from "../../data.js";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState(DUMMY_COURSES);
  return (
    <section>
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
        <h2 className="center">No Courses Founded</h2>
      )}
    </section>
  );
};

export default Courses;
