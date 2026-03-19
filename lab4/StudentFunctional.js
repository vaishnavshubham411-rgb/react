import React, { useEffect } from "react";

function StudentFunctional() {

  useEffect(() => {
    console.log("Functional component mounted");

    return () => {
      console.log("Functional component unmounted");
    };

  }, []);

  const students = [
    { name: "Shubham", age: 20 },
    { name: "Aman", age: 17 }
  ];

  return (
    <div>
      <h3>Student List (Functional Component)</h3>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.age} years
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentFunctional;