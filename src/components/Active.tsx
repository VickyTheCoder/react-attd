import React, { useState } from "react";

const Active: React.FC = () => {
  // Ensure it starts as deselected
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const OnOff = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div>
      <h2>Toggle Control</h2>
      <button onClick={OnOff}>
        {isSelected ? "In ✅" : "Out ❌"}
      </button>
      <p>Option is {isSelected ? "Selected" : "Deselected"}</p>
      <a href="/">Go Back</a>
    </div>
  );
};

export default Active;
