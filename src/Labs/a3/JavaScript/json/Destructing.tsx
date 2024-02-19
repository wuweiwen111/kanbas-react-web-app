// be imported to JavaScript/index.tsx

function Destructing() {
  const person = { name: "John", age: 25 }; // person: object with two properties: name and age
  const { name, age } = person; // whole thing as an object deconstruct 
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  return (
    <div>
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;
      <br />
      <br />
      name = {name}
      <br />
      age = {age}
      <h3>Array Destructing</h3>
      const [first, second, third] = ["one","two","three"]
      <br />
      <br />
      first = {first}
      <br />
      second = {second}
      <br />
      third = {third}
    </div>
  );
}
export default Destructing;
