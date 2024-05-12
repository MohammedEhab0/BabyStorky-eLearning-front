import "./InviteUser.css";
import { useState, useEffect } from "react";

const generateRandomCode = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const InviteUser = () => {
  const [users, setUsers] = useState([
    { email: "mohammeali@gmail.com", id: generateRandomCode() },
    { email: "maiketyson@gmail.com", id: generateRandomCode() },
  ]);
  const [newUser, setNewUser] = useState("");

  const handleInputChange = (event) => {
    setNewUser(event.target.value);
  };

  const addEmail = () => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { email: newUser, id: generateRandomCode() },
    ]);
    setNewUser("");
  };

  const deleteEmail = (index) => {
    setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const newUsers = users.map((user) => {
      if (!user.id) {
        return { ...user, id: generateRandomCode() };
      }
      return user;
    });
    setUsers(newUsers);
  }, [users]);

  return (
    <div className="invite-box">
      <h1>Invite User</h1>
      <div className="invite-bar">
        <input
          type="email"
          placeholder="Enter User Email"
          value={newUser}
          onChange={handleInputChange}
          className="enter-email"
        />
        <button className="btn primary" onClick={addEmail}>
          Invite
        </button>
      </div>
      <div className="invited-list">
        <ol>
          {users.map((user, index) => (
            <li className="li-invited" key={index}>
              <span className="invitedEmail">{user.email}</span>
              <span className="randomCode">id: {user.id}</span>
              <button
                className="btn primary"
                onClick={() => deleteEmail(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default InviteUser;
