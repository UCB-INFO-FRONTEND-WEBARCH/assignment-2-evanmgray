import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const testTask = {
    id: Date.now(), // unique identifier
    text: "Call Mom", // task description
    completed: false, // completion status
  };

  const tasksNew = [...tasks, testTask];

  const taskTest = (e) => {
    // Target Element
    const targetElement = e.target;

    // Create Task Element
    const taskLineItem = document.createElement("li");

    const taskInput = document.createElement("input");
    taskInput.type = "checkbox";
    taskInput.id = "1";
    taskInput.name = "1";
    taskInput.className = "main-list-checkbox";

    const taskLabel = document.createElement("label");
    taskLabel.htmlFor = "1";
    taskLabel.textContent = "Call Mom";

    taskLineItem.appendChild(taskInput);
    taskLineItem.appendChild(taskLabel);

    taskLineItem.child;

    //Render HTML for each task
    targetElement.nextSibling.appendChild(taskLineItem);
  };

  return (
    <div className="taskManager">
      <header className="site-header">
        <button className="hamburger-menu-button">
          <img src="/src/assets/menu_icon.png" alt="Menu Icon" />
        </button>
        <form>
          <label className="search-container">
            <img
              className="search-icon"
              src="/src/assets/search_icon.png"
              alt="Search Icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Quick Find"
            />
          </label>
        </form>
        <div className="site-header__status">
          <img src="/src/assets/check_icon.png" alt="Check Icon" />
        </div>
        <div className="site-header__count">30/5</div>
      </header>
      <nav className="left-nav">
        <ul>
          <li>
            <img src="/src/assets/inbox_icon.png" alt="Inbox Icon" />
            <p className="nav-item">Inbox</p>
            <p className="nav-count">5</p>
          </li>
          <li>
            <img src="/src/assets/calendar_icon.png" alt="Inbox Icon" />
            <p className="nav-item">Today</p>
            <p className="nav-count">5</p>
          </li>
          <li>
            <img src="/src/assets/upcoming_icon.png" alt="Inbox Icon" />
            <p className="nav-item">Upcoming</p>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <h1 onClick={taskTest}>Inbox</h1>
        <ul></ul>
      </main>
    </div>
  );
}

export default App;
