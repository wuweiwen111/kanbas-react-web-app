// JavaScript index.tsx
// import components like App
// -----------------all imported function-----------------------------------------------------------
import React from "react";
import VariablesAndConstants from "./variables/VariablesAndConstants ";
import VariableTypes from "./variables/Variabletypes";
import BooleanVariables from "./variables/BooleanVariables";
import TernaryOperator from "./conditionals/TernaryOperator";
import IfElse from "./conditionals/IfElse";
// import function:
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import FunctionDestructing from "./functions/FunctionDestructing";
// import array:
import WorkingWithArrays from "./arrays/WorkingWithArrays";
// import JSON
import JsonStringify from "./json/JsonStringify";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
// import string
import TemplateLiterals from "./string/TemplateLiterals";
// -----------------all imported function-----------------------------------------------------------

function JavaScript() {
  // console.log("hello world from console.log");
  return (
    <div>
      <h1>------------------------------------------------</h1>
      <h1> JavaScript (from src/Labs/a3/JavaScript)</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <TernaryOperator />
      <IfElse />
      <h1>------------------------------------------------</h1>
      <WorkingWithFunctions />
      <FunctionDestructing />
      <h1>------------------------------------------------</h1>
      <WorkingWithArrays />
      <h1>------------------------------------------------</h1>
      <JsonStringify />
      <House />
      <Spreading />
      <Destructing />
      <h1>------------------------------------------------</h1>
      <TemplateLiterals />
    </div>
  );
}
export default JavaScript;
