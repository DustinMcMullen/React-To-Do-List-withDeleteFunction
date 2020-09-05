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
    <div>
      <li
        style={{ textDecoration: completed }}
        onMouseDown={() => {
          props.delete(props.id);
        }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
