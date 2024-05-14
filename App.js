import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [step, setStep] = useState(1);

  const message = ["Learn React😎", "Complete Assignment✅", "Get OnBoard😁"];

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  };
  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>ASSIGNMENT-2</h1>
        </div>
        <p className="message">
          {step}. {message[step - 1]}
        </p>
        <div>
          <button onClick={handlePrevious}>PREVIOUS</button>
          <button onClick={handleNext}>NEXT</button>
        </div>
      </div>
    </>
  );
}
