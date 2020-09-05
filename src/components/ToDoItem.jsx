import React, { useState } from "react";

function ToDoItem(props) {
  const [completed, setCompleted] = useState(null);

  function handleTask() {
    if (completed === null) {
      setCompleted("line-through");
    } else if (completed === "line-through") {
      setCompleted(null);
    }
  }

  return (
    <li style={{ textDecoration: completed }} onMouseDown={handleTask}>
      {props.text}
    </li>
  );
}

export default ToDoItem;
