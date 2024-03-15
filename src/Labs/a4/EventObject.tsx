import React, { useState } from "react";

const EventObject = () => {
  const [event, setEvent] = useState(null);
  const handleClick = (e: any) => {
    e.target = e.target.outerHTML;
    delete e.view;
    setEvent(e);
  };
  return (
    <div>
      <h1>
        -------------------Event Object---------------------------------------
      </h1>
      <button
        id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <h1>
        -------------------Event Object---------------------------------------
      </h1>
    </div>
  );
};
export default EventObject;
