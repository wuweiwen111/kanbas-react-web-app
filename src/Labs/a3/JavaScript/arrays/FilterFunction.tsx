// be imported to WorkingWithArrays.tsx

let numberArray1 = [1, 2, 4, 5, 6];
const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

const FilterFunction = () => {
  return (
    <div>
      <h3>Filter function</h3>
      <p>numbersGreaterThan2={numbersGreaterThan2}</p>
      <p>evenNumbers={evenNumbers}</p>
      <p>oddNumbers={oddNumbers}</p>
    </div>
  );
};

export default FilterFunction;
