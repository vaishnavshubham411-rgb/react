import React, { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

function UserProfile() {
  const [user, setUser] = useState({
    name: "MR. Shubham",
    role: "chief minister",
  });
  const [showInfo, setShowInfo] = useState(false);
  // mounting of UserProfile
  useEffect(() => {
    console.log("UserProfile Mounted");
    return () => {
      console.log("UserProfile UnMounted");
    };
  }, []);
  const updateUser = () => {
    setUser({
      name: "Mr. Shubham Vaishnav",
      role: "prime minister",
    });
  };
  return (
    <div
      style={{
        border: "3px solid #222",
        padding: "20px",
        width: "350px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>User Profile</h2>
      <p>
        <strong>Name : </strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong>
        {user.role}
      </p>
      <button onClick={updateUser}>Update Profile</button>
      <button
        onClick={() => setShowInfo(!showInfo)}
        style={{ marginLeft: "10px" }}
      >
        Toggle InfoCard
      </button>
      {/*InfoCard Mounted Inside UserProfile */}
      {showInfo && (
        <InfoCard
          title="Additional Info"
          content={`User ${user.name} works as ${user.role}`}
        />
      )}
    </div>
  );
}

export default UserProfile;