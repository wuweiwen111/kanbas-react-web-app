const ClickEvent = () => {
  // function to be called once click
  const hello = () => {
    alert("Hello World!");
  };
  const lifeIs = (good: string) => {
    alert(`life is ${good}`);
  };

  return (
    <div>
        <h1>-------------------Click Event---------------------------------------</h1>
      <button onClick={hello}>Click Hello</button> <br/><br/>
      <button onClick={() => lifeIs("Good")}>Click Good</button><br/><br/>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
      >
        Click Hello 3
      </button>
      <h1>-------------------Click Event---------------------------------------</h1>

    </div>
  );
};
export default ClickEvent;
