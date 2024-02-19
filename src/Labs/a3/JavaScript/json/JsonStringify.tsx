// be imported to JavaScript/index.tsx

function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  return (
    <>
      <h3>JSON Stringify</h3>
      {/*  converts a JavaScript value (such as an array, object, number, or string) into a JSON-formatted string */}
      squares = {JSON.stringify(squares)}
    </>
  );
}
export default JsonStringify;
