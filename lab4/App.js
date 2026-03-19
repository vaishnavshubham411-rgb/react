import React, { useState } from "react";
import CourseList from "./CourseList";
import StudentClass from "./StudentClass";
import StudentFunctional from "./StudentFunctional";

function App() {
  const [showCourses, setShowCourses] = useState(false);
  const [showStudents, setShowStudents] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Mount and Unmount Example</h1>

      <button onClick={() => setShowCourses(!showCourses)}>
        Toggle Course List
      </button>

      <button onClick={() => setShowStudents(!showStudents)}>
        Toggle Student List
      </button>

      <hr />

      {showCourses && <CourseList />}
      {showStudents && <StudentClass />}
      {showStudents && <StudentFunctional />}
    </div>
  );
}

export default App;