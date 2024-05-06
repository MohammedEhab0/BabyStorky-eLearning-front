import React from "react";
import { useState } from "react";
import CourseItem from "../components/Courses/CourseItem.jsx";
import { DUMMY_COURSES } from "../data.js";

const AttendeesCourses = () => {
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
        <h2 className="center">No courses Founded</h2>
      )}
    </section>
  );
};

export default AttendeesCourses;
