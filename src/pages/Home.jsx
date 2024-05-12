import React, { useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState({
    Name: "Logan",
  });
  return (
    <div className="home">
      <h2>Welcome Back</h2>
      <h3>{userName.Name}</h3>
    </div>
  );
};

export default Home;
