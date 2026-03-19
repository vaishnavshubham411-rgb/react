import React, { useState } from "react";

function RandomNumberGenerator() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1000);
  };

  const generateNewNumber = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
 <div
  style={{
    width: "500px",
    height: "250px",
    margin: "60px auto",
    padding: "40px",
    fontSize: "24px",
    textAlign: "center",
    borderRadius: "10px",
    background: "#f3f3f3",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h2 style={{ marginBottom: "20px", color: "#333" }}>
    Random Number: {randomNumber}
  </h2>

  <button
    style={{
      padding: "10px 18px",
      border: "none",
      borderRadius: "6px",
      background: "#4CAF50",
      color: "#fff",
      cursor: "pointer",
      fontSize: "18px",
    }}
    onClick={generateNewNumber}
   
  >
    Generate Random Number
  </button>

  <img
    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGN1djFubTNnbXF1d2U1eHFjb3J0ZHcwMW45cGZ0dWJmN3VvOHFmeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cklPOHnHepdwBLRnQp/giphy.gif"
    alt="Random Number Generator"
    style={{ marginTop: "30px", width: "200px", height: "150px"
    }}
  />
</div>
  );
}

export default RandomNumberGenerator;