import React from "react";
import { useState } from "react";
import "../Styles/CreateTodos.css";

export function CreateTodos(props) {
  const [description, setDescription] = useState("");
  const { handleAddItem } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="file-input">
        <textarea
          type="text"
          className="text"
          value={description}
          placeholder='Create task...'
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="CreateTodos"
          disabled={description ? "" : "disabled"}
        >
          +
        </button>
      </div>
    </form>
  );
}
