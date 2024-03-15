const add = (a: number, b: number) => {
  alert(`${a} + ${b} = ${a + b}`);
};

const PassingDataOnEvent = () => {
  return (
    <div>
      <h1>
        -------------------Passing Date On
        Event---------------------------------------
      </h1>

      <button onClick={() => add(2, 3)} className="btn btn-primary">
        Pass 2 and 3 to add()
      </button>
      <h1>
        -------------------Passing Date On
        Event---------------------------------------
      </h1>
    </div>
  );
};
export default PassingDataOnEvent;
