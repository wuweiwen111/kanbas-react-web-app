// Import the component into the Assignment3
const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" }, // this todo has default value
}) => {
  return (
    <li className="list-group-item">
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title}({todo.status})
    </li>
  );
};

export default TodoItem;
