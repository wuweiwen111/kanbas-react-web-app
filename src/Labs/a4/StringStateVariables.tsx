import React, { useState } from "react";
const StringStateVariables = () => {
  const [firstName, setFirstName] = useState("John");
  return (
    <div>
      <p>{firstName}</p>
      <input
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  );
};

export default StringStateVariables;
