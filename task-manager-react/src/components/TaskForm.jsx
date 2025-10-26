import { useState } from "react";
/*

What does this component do?

This component, TaskForm, returns a form used to create new tasks.
The form appears at the bottom of the task lists and includes an input field and a submit button.

*/

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prevent submit if input is empty or only whitespace
    if (!taskText.trim()) {
      alert("Please enter a task before submitting!");
      return;
    }
    addTask(taskText);
    setTaskText("");
  };

  const handleChange = (e) => {
    //Update state when input field changes
    setTaskText(e.target.value);
  };

  return (
    <form id="add-task-form" className="add-task-form" onSubmit={handleSubmit}>
      <input
        id="taskText"
        name="taskText"
        type="text"
        value={taskText}
        onChange={handleChange}
        placeholder="Add a Task Here"
        className="add-task-input"
      ></input>
      <button className="add-task-button" type="submit">
        Create
      </button>
    </form>
  );
}

export default TaskForm;
