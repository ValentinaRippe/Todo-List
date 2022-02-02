import React from "react";
import { useState } from "react";
import '../Styles/CreateTodos.css'

export function CreateTodos(props) {
  const [description, setDescription] = useState("");
  const { handleAddItem } = props;
  const handleSubmit = e => {
    e.preventDefault();
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description
      });
    setDescription("");
  };
    return (
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="file-input">
            <input
              type="text"
              className="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="CreateTodos"
              disabled={description ? "" : "disabled"}
            >
              +
            </button>
          </div>
        </div>
      </form>
    );
  }
