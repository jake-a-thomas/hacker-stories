import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  console.log({ tasks, filter });

  const addTask = (task) => {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const editTask = (id) => {};

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const changeStatus = (id) => {
    let updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To do list</h1>

      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>

      <Form onSubmit={addTask} />
    </div>
  );
}

export default TodoList;
