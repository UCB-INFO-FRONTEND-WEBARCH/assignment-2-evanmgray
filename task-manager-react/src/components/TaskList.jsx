import { useState } from "react";
import TaskItem from "./TaskItem.jsx";

/*

What does this component do?

This component, TaskList, is responsible for using TaskItem to render a list of tasks in a task management application.
It receives an array of task objects as a prop and maps over this array to create a list item for each task.
Each list item includes a checkbox to mark the task as completed and a label displaying the task's text.

*/

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {/* REACT MAGIC! */}
      {/* The map function takes an array of JSON objects and returns an array of JSX elements*/}
      {/* That array is nested inside a pair of curly brackets */}
      {tasks.map((task) => (
        <TaskItem
          //This key is special to React line items and doesn't show in the DOM
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
