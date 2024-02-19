// src/Labs/a3 main file = like src's App.tsx
// import components

import JavaScript from "./JavaScript";
import Classes from "./css/Classes";
import PathParameters from "./routing/PathParameters";
import Styles from "./css/Styles";
import ConditionalOutput from "./ConditionalOutput/index";
import Highlight from "./Hightlight/Hightlight";
import Add from "./Add/Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList"
function Assignment3() {
  return (
    <div>
      <h1>Assignment 3 </h1>
      <TodoItem />
      <TodoList/>
      <Add a={3} b={4} />
      <br />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />

      <JavaScript />
    </div>
  );
}

export default Assignment3;
