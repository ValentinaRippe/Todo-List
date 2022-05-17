import React from "react";
import "../Styles/TodoList.css";
import { Checkbox } from "./Checkbox";

export function TodoList(props) {
  const { todos, setTodos, searchedTodos } = props;

  const onClickRemoveItem = (e) => {
    const updateList = todos.filter((item) => !item.done);
    setTodos(updateList);
  };

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = todos.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setTodos(updateList);
  };

  const chk = searchedTodos.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus}></Checkbox>
  ));
  return (
    <>
      <div className="TodoItem">
        {todos.length ? chk : "No tasks"}
        {todos.length ? (
          <p>
            <button className="button-delete" onClick={onClickRemoveItem}>
              Delete task
            </button>
          </p>
        ) : null}
      </div>
    </>
  );
}
