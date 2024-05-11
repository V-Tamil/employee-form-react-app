import React from "react";

function InputField(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={(event) => {
          props.onValueChange(event.target.value);
        }}
        value={props.value}
        className="input-field"
        id={props.id}
      />
    </div>
  );
}

export default InputField;
