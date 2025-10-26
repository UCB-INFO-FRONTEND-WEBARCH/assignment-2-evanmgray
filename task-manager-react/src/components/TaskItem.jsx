import { useState } from "react";
/*

What does this component do?

This component, TaskItem, is responsible for rendering a single task in a task management application.
It receives a task object and two callback functions as props: onToggle and onDelete.
The component displays the task's text, a checkbox to mark it as completed, and a delete button.

*/

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        id={task.id}
        name={task.id}
        className="main-list-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label
        className={`main-list-task-label ${task.completed ? "complete" : ""}`}
        htmlFor={task.id}
      >
        {task.text}
      </label>
      <button
        className="main-list-delete-button"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
