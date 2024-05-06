import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterLogin.css";
const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="background-image">
      <section className="login">
        <div className="form-container">
          <h2>Sign In</h2>
          <form className="formlogin__form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandler}
              required
              className="Email"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={changeInputHandler}
              required
              className="password"
            />
            <button type="submit" className="btn primary lo">
              Login
            </button>
          </form>
          <small>
            You Don't have an account?<Link to="/register"> Register</Link>
          </small>
        </div>
      </section>
    </div>
  );
};

export default Login;
