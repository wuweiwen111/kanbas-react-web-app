// component be imported to JavaScript/index.tsx

function IfElse() {
  let true1 = true,
    false1 = false;

  return (
    <div>
      <h2>If Else</h2>
      {/* && AND: has to be two True */}

      {true1 && <p>true1</p>}

      {/* if (!false1) is true, then execute  <p>!false1</p> */}
      {!false1 ? <p>!false1</p> : <p>false1</p>}
    </div>
  );
}
export default IfElse;
