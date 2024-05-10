import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Avatar from "../../images/instructor-2.png";
import { Link } from "react-router-dom";
import "./UserProfile.css";
const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <div className="background-image">
      <section className="profile">
        <div className="container profile__container">
          <Link to="/mycourses/userdata" className="btn user">
            My Courses
          </Link>
          <div className="profile__details">
            <div className="avatar__wrapper">
              <div className="profile__avatar">
                <img src={avatar} alt="" />
              </div>
              {/*Form to update avatar*/}
              <form className="avatar__form">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png,jpg,jpeg"
                />
                <label htmlFor="avatar">
                  <FaEdit className="edit" />
                </label>
              </form>
            </div>
            <h1>Login</h1>
            {/*update user details*/}
            <form className="form profile__form">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="full-name"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setcurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Pasword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button type="submit" className="btn primary">
                Update Details
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
