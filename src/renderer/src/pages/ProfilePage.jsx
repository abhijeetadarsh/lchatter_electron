import React, { useState } from "react";

function ProfilePage() {
  // Define state variables for user information
  const [username, setUsername] = useState("ExampleUser");
  const [bio, setBio] = useState("This is my bio");
  const [email, setEmail] = useState("example@example.com");
  const [avatar, setAvatar] = useState("https://example.com/avatar.jpg");

  // Function to handle updating user information
  const updateProfile = () => {
    // Code to update user information
  };

  return (
    <div className="profile">
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <div className="info">
        <h2>{username}</h2>
        <p>{bio}</p>
        <p>Email: {email}</p>
        <button onClick={updateProfile}>Edit Profile</button>
      </div>
    </div>
  );
}

export default ProfilePage;
