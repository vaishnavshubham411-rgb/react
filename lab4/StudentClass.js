import React, { Component } from "react";

class StudentClass extends Component {

  componentDidMount() {
    console.log("Student class component mounted");
  }

  componentWillUnmount() {
    console.log("Student class component unmounted");
  }

  render() {
    const students = [
      { name: "Ali", age: 20 },
      { name: "Sara", age: 22 },
      { name: "John", age: 19 },
    ];

    return (
      <div>
        <h3>Student List (Class Component)</h3>

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
}

export default StudentClass;