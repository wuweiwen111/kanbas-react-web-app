import React, { useState } from "react";
const EventObject2 = () => {
  const [name, setName] = useState("Amy");
  const [age, setAge] = useState(20);
  const handleClick = () => {
    setName("Bob");
    setAge(30);
  };

  return (
    <div>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default EventObject2;
