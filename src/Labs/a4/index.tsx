import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import EventObject2 from "./EventObject2";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
// redux
import ReduxExamples from "./ReduxExamples";
// todo 
import { useSelector } from "react-redux";
import { LabState } from "../store";

// arrow function
const Assignment4 = () => {
  const sayHello = () => {
    alert("Hello");
  };
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <>
      <h1>Assignment 4</h1>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <h1>useState(integer): Integer State Variable</h1>
      <EventObject2 />
      <Counter />
      <h1>useState(boolean): Boolean State Variables</h1>
      <BooleanStateVariables />
      <h1>useState(string):String State Variable</h1>
      <StringStateVariables />
      <h1>useState(new Date()): Date State Variables</h1>
      <DateStateVariable />
      <h1>useState(string): Object State Variables</h1>
      <ObjectStateVariable />
      <h1>useState(array): Array State Variable</h1>
      <ArrayStateVariable />
      <h1>Child and Parent State Sharing</h1>
      <ParentStateComponent />
      <ReduxExamples />
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

    </>
  );
};
export default Assignment4;
