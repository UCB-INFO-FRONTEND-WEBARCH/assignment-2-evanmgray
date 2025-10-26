import { useState } from "react";
import TaskCounter from "./TaskCounter.jsx";
/*

What does this component do?

It renders the navigation bar for the task management application.

*/

function HeaderBar({ totalTasks, completedTasks }) {
  return (
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
      <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} />
    </header>
  );
}

export default HeaderBar;
