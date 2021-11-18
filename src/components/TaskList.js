import React, { useState } from "react";

function TaskList({ tasks, filter, changeStatus, deleteTask, editTask }) {
  return tasks.map((task) => {
    let isTaskVisible = false;

    switch (filter) {
      case "all":
        isTaskVisible = true;
        break;
      case "complete":
        isTaskVisible = task.isComplete;
        break;
      case "incomplete":
        isTaskVisible = !task.isComplete;
        break;
    }

    return (
      isTaskVisible && (
        <div key={task.id}>
          <span key={task.id} onClick={() => changeStatus(task.id)}>
            {task.text}
          </span>

          <span className="taskButtons">
            <button
              className="edit"
              onClick={() => editTask({ id: task.id, value: task.text })}
            >
              Edit
            </button>
            <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
            <button className="status" onClick={() => changeStatus(task.id)}>
              {task.isComplete ? "Mark incomplete" : "Mark complete"}
            </button>
          </span>
        </div>
      )
    );
  });
}

export default TaskList;
