import React, { useState } from "react";
import "./styles.css";

const useArray = (array) => {
  const [data, setValue] = useState(array);

  return {
    data,
    setValue,
    add: (e) => setValue((value) => value.concat(e)),
    completed: (id) =>
      setValue((arr) =>
        arr.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
      )
  };
};

export default function App() {
  const todos = useArray([
    { task: "Surf", id: 1, completed: true },
    { task: "Comida", id: 2, completed: false },
    { task: "Programar", id: 3, completed: false }
  ]);
  return (
    <div className="App">
      {todos.data.map((todo) => (
        <div key={todo.id}>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => todos.completed(todo.id)}
          >
            {todo.task}
          </p>
          <p style={{ color: "salmon", fontSize: 12 }}>
            {todo.completed ? "Completada" : "No completada"}
          </p>
        </div>
      ))}
      <button
        onClick={() =>
          todos.add({
            task: "Dormir",
            id: todos.data[todos.data.length - 1].id + 1
          })
        }
      >
        Add Tasks
      </button>
    </div>
  );
}
