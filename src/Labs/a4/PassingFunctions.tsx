function PassingFunctions ({ theFunction }: { theFunction: () => void }) {
  return (
    <div>
      <h1>
        -------------------Passing
        Functions---------------------------------------
      </h1>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <h1>
        -------------------Passing
        Functions---------------------------------------
      </h1>
    </div>
  );
};
export default PassingFunctions;
