import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DUMMY_COURSES } from "../../data.js";
import "./Dashboard.css";
const Dashboard = () => {
  const [courses, setCourses] = useState(DUMMY_COURSES);
  return (
    <section className="dashboard">
      {courses.length ? (
        <div className="container dashboard__container">
          {courses.map((course) => {
            return (
              <article key={course.id} className="dashboard__course">
                <div className="dashboard__course-info">
                  <div className="dashboard__course-thumbnail">
                    <img src={course.thumbnail} alt="" />
                  </div>
                  <h5>{course.title}</h5>
                </div>
                <div className="dashboard__course-actions">
                  <Link
                    to={`/courses/${course.id}/coursecontent`}
                    className="btn sm"
                  >
                    View
                  </Link>
                  <Link
                    to={`/courses/${course.id}/edit`}
                    className="btn sm primary"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/courses/${course.id}/delete`}
                    className="btn sm danger"
                  >
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You Have No Posts.</h2>
      )}
    </section>
  );
};

export default Dashboard;
