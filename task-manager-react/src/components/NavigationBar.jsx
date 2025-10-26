import { useState } from "react";

/*

What does this component do?

It renders the navigation bar for the task management application.

*/

function NavigationBar({ activeFilter, onFilterClick }) {
  return (
    <nav className="left-nav">
      <ul>
        <li className="nav-item">
          <img src="../assets/inbox_icon.png" alt="Inbox Icon" />
          <p className="nav-item-text">Inbox</p>
          <p className="nav-count">5</p>
        </li>
        <li className="nav-sub-item">
          <p
            className={`nav-filter ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => onFilterClick("all")}
          >
            All
          </p>
          <p className="nav-filter-separator">|</p>
          <p
            className={`nav-filter ${
              activeFilter === "active" ? "active" : ""
            }`}
            onClick={() => onFilterClick("active")}
          >
            Active
          </p>
          <p className="nav-filter-separator">|</p>
          <p
            className={`nav-filter ${
              activeFilter === "completed" ? "active" : ""
            }`}
            onClick={() => onFilterClick("completed")}
          >
            Completed
          </p>
        </li>
        <li className="nav-item">
          <img src="../assets/calendar_icon.png" alt="Inbox Icon" />
          <p className="nav-item-text">Today</p>
          <p className="nav-count">5</p>
        </li>
        <li className="nav-item">
          <img src="../assets/upcoming_icon.png" alt="Upcoming Icon" />
          <p className="nav-item-text">Upcoming</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
