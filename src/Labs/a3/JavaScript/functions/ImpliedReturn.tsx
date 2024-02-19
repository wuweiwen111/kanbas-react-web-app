// component to be imported to WorkingWithFunctions.tsx

const ImpliedReturn=()=> {
  // arrow function
  const multiply = (a: number, b: number) => a * b; 
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  return (
    <>
      <h3>3. Implied return</h3>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4,5)={multiply(4, 5)} <br />
    </>
  );
}

export default ImpliedReturn;
