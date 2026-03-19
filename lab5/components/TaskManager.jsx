import React, { useState } from "react";
import InfoCard from "./InfoCard";

function TaskManager() {
  const [task, setTask] = useState("Run Metro Before End of 2026");

  const updateTask = () => {
    setTask("Bullet Train Making Before 2030");
  };

  return (
    <div
      style={{
        border: "2px solid #444",
        padding: "15px",
        marggin: "10px",
        borderRadius: "8px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h2>Hello</h2>
      {<InfoCard title="Task Manager" content={`Current Task: ${task}`} />}
      <button onClick={updateTask}>Change Task</button>
    </div>
  );
}

export default TaskManager;