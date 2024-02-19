// component to be imported to WorkingWithFunctions.tsx

const ArrowFunctions=()=> {
  const subtract = (a: number, b: number) => {
    return a - b;
  };
  const threeMinusOne = subtract(3, 1);
  console.log(threeMinusOne);

  return (
    <>
      <h3>2. New ES6 arrow functions</h3>
      threeMinusOne = {threeMinusOne}
      <br />
      subtract(3,1)={subtract(3, 1)}
    </>
  );
}

export default ArrowFunctions;
