import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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
        <h1>Inbox</h1>
        <ul>
          <li>
            <input
              type="checkbox"
              id="1"
              name="1"
              className="main-list-checkbox"
            />
            <label htmlFor="1">Call Mom</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="2"
              name="2"
              className="main-list-checkbox"
            />
            <label htmlFor="2">Buy the new issue of Scientific American</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="3"
              name="3"
              className="main-list-checkbox"
            />
            <label htmlFor="3">Return the textbook to Josie</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="4"
              name="4"
              className="main-list-checkbox"
            />
            <label htmlFor="4">Buy the new album by Rake</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="5"
              name="5"
              className="main-list-checkbox"
            />
            <label htmlFor="5">Buy a gift card for Dad</label>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
