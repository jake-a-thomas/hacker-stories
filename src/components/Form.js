import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
    //console.log(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
      isComplete: false,
    });

    setInput("");
  };
  return (
    <div>
      <form className="task-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add/Edit task"
          value={input}
          name="text"
          className="task-input"
          onChange={handleChange}
        />
        <button className="submit-button">Add task</button>
      </form>
    </div>
  );
}

export default Form;
