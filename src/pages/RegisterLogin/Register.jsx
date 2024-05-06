import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterLogin.css";
const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="background-image">
      <section className="register">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form className="form register__form">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={userData.name}
              onChange={changeInputHandler}
              autoFocus
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={userData.password2}
              onChange={changeInputHandler}
              required
            />
            <button type="submit" className="btn primary">
              Register
            </button>
          </form>
          <small>
            Already have an account?<Link to="/login"> sign in</Link>
          </small>
        </div>
      </section>
    </div>
  );
};

export default Register;
