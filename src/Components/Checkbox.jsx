import React, { Fragment } from "react";
import "../Styles/Checkbox.css";

function Checkbox(props) {
  const {
    onChange,
    data: { id, description, done },
  } = props;
  return (
    <Fragment>
      <label className="todo-new-item" name="Mylabel">
        <div className="check">{done?'✔':''}</div>
          <input
            className="todo__state"
            name={id}
            type="checkbox"
            defaultChecked={done}
            onChange={onChange}
          />
        <div className="todo__text">{description}</div>
      </label>
    </Fragment>
  );
}
export { Checkbox };
