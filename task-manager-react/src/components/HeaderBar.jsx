import { useState } from "react";
import TaskCounter from "./TaskCounter.jsx";
import menuIcon from "../assets/menu_icon.png";
import searchIcon from "../assets/search_icon.png";
import checkIcon from "../assets/check_icon.png";
/*

What does this component do?

It renders the navigation bar for the task management application.

*/

function HeaderBar({ totalTasks, completedTasks, onMenuClick }) {
  return (
    <header className="site-header">
      <button className="hamburger-menu-button">
        <img src={menuIcon} alt="Menu Icon" onClick={onMenuClick} />
      </button>
      <form className="search-form">
        <label className="search-container">
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Quick Find"
          />
        </label>
      </form>
      <div className="site-header__status">
        <img src={checkIcon} alt="Check Icon" />
      </div>
      <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} />
    </header>
  );
}

export default HeaderBar;
