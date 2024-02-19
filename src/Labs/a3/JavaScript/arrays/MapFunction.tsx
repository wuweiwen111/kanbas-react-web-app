// be imported to WorkingWithArrays.tsx
let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = (a: number) => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map((a) => a * a * a);

const MapFunction = () => {
  return (
    <div>
      <h3>Map</h3>
      <p>squares={squares.join(",")}</p>
      <p>cubes={cubes.join(",")}</p>
    </div>
  );
};

export default MapFunction;
