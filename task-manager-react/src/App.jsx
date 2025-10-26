import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import HeaderBar from "./components/HeaderBar.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

function App() {
  // tasks is the state value
  // setTasks is the function that updates the state value
  // the value inside useState is the initial state
  const [tasks, setTasks] = useState([
    { id: Date.now(), text: "Learn React", completed: false },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  /////////////////// State Manipulation Functions ///////////////////
  const addTask = (taskText) => {
    // Add new task to state
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    // setTasks is correct in React, instead of tasks = [...tasks, newTask];
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    // Find the task with the given id and switch it's completed status
    const tasksTemp = tasks.map((task) =>
      // in this map, the function returns each task object,
      // with the completed status updated for the given id
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(tasksTemp);
  };

  const deleteTask = (id) => {
    // Find the task with the given id and remove it
    const tasksTemp = tasks.filter((task) => task.id !== id);
    setTasks(tasksTemp);
  };

  const changeActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  // Calculate counts for TaskCounter
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  ////////////////////// ////////////////////// //////////////////////

  // Create Filtered Task List for Displaying
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "all") return true; // keep everything
    if (activeFilter === "active") return !task.completed; // keep only not done
    if (activeFilter === "completed") return task.completed; // keep only done
  });

  //Return main block of application
  return (
    <div className="taskManager">
      <HeaderBar totalTasks={totalTasks} completedTasks={completedTasks} />
      <NavigationBar
        activeFilter={activeFilter}
        onFilterClick={changeActiveFilter}
      />
      <main className="main-content">
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
        <TaskForm addTask={addTask} />
      </main>
    </div>
  );
}

export default App;
