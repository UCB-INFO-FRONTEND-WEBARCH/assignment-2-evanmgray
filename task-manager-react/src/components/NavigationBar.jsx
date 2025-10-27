import { useState } from "react";
import inboxIcon from "../assets/inbox_icon.png";
import calendarIcon from "../assets/calendar_icon.png";
import upcomingIcon from "../assets/upcoming_icon.png";

/*

What does this component do?

It renders the navigation bar for the task management application.

*/

function NavigationBar({
  activeFilter,
  onFilterClick,
  showMobileMenu,
  totalTasks,
}) {
  return (
    <nav className={`left-nav ${showMobileMenu ? "is-open" : ""}`}>
      <ul>
        <li className="nav-item">
          <img src={inboxIcon} alt="Inbox Icon" />
          <p className="nav-item-text">Inbox</p>
          <p className="nav-count">{totalTasks}</p>
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
          <img src={calendarIcon} alt="Inbox Icon" />
          <p className="nav-item-text">Today</p>
          <p className="nav-count">{totalTasks}</p>
        </li>
        <li className="nav-item">
          <img src={upcomingIcon} alt="Upcoming Icon" />
          <p className="nav-item-text">Upcoming</p>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
