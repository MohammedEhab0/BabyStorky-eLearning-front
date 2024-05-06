import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar1 from "../../images/avatar1.jpg";
import Avatar2 from "../../images/avatar2.jpg";
import Avatar3 from "../../images/avatar3.jpg";
import Avatar4 from "../../images/avatar4.jpg";
import "./Authors.css";
const authorsData = [
  { id: 1, avatar: Avatar1, name: "Logan", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Ernest Achiever", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Adam", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Nana Addo", posts: 2 },
];
const Attendees = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors__container">
          {authors.map((author) => {
            return (
              <Link
                key={author.id}
                to={`/posts/users/${author.id}`}
                className="author"
              >
                <div className="author__avatar">
                  <img src={author.avatar} alt={`Image of${author.name}`} />
                </div>
                <div className="author__info">
                  <h4>{author.name}</h4>
                  <p>{author.posts}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No Users Founded.</h2>
      )}
    </section>
  );
};

export default Attendees;
