import { useState } from "react";

function Active(){
  const [isSelected, setIsSelected] = useState(false);
  const OnOff = () => {
    setIsSelected((prev) => !prev);
  }
    return (
        <div>
          <h2>Toggle Control</h2>
      <button onClick={OnOff}>
        {isSelected ? "Out ❌" : "In ✅"}
      </button>
      <p>Option is {isSelected ? "Selected" : "Deselected "}</p>
          <a href="/">Go Back</a>
        </div>
      );
}

export default Active;