// component be imported to JavaScript/index.tsx
function TernaryOperator() {
  let loggedIn = true;

  return (
    <div>
      <h2>TernaryOperator: Logged In</h2>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
    </div>
  );
}
export default TernaryOperator;
