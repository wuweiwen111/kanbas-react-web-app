import React, { useState } from "react";
const ArrayStateVariable = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  // add
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  // delete
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div>
      <button onClick={addElement}>Add Element</button>
      <br />
      <br />
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button className="btn btn-danger" onClick={() => deleteElement(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayStateVariable;
