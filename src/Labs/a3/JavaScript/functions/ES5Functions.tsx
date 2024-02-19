// component to be imported to WorkingWithFunctions.tsx

function ES5Functions() {
  function add(a: number, b: number) {
    return a + b;
  }

  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  return (
    <>
      <h2>Functions</h2>
      <h3>1. Legacy ES5 functions</h3>
      twoPlusFour = {twoPlusFour}
      <br />
      add(2, 4) = {add(2, 4)}
      <br />
    </>
  );
}
export default ES5Functions;
