# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React-based task management application built with Vite. The app allows users to create, complete, and delete tasks with filtering capabilities (All/Active/Completed).

## Development Commands

```bash
# Start development server with HMR
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### State Management

All application state is managed in `App.jsx` using React `useState` hooks:
- `tasks`: Array of task objects with `{ id, text, completed }` structure
- `activeFilter`: Current filter state ("all", "active", or "completed")

State manipulation functions (`addTask`, `toggleTask`, `deleteTask`, `changeActiveFilter`) are defined in App.jsx and passed down to child components as props.

### Component Structure

```
App.jsx (root component - manages all state)
├── HeaderBar.jsx (search bar, menu, task counter)
│   └── TaskCounter.jsx (displays total/completed count)
├── NavigationBar.jsx (filter controls: All/Active/Completed)
├── TaskList.jsx (renders filtered task list)
│   └── TaskItem.jsx (individual task with checkbox and delete button)
└── TaskForm.jsx (input form for creating new tasks)
```

### Data Flow Pattern

- App.jsx holds all state and filtering logic
- Filtered tasks are calculated in App.jsx before being passed to TaskList
- Event handlers (onToggle, onDelete, addTask, onFilterClick) are passed down through props
- Child components remain stateless except for local form state in TaskForm

### Key Implementation Details

- Task IDs are generated using `Date.now()`
- Task filtering logic in App.jsx (lines 60-64) determines which tasks to display
- TaskList maps over filtered tasks to create TaskItem components
- Each TaskItem requires a unique `key` prop for React's reconciliation
- TaskForm prevents empty task submission with whitespace trimming validation

## Tech Stack

- **React 19.1.1**: Component framework
- **Vite 7.1.7**: Build tool with HMR
- **ESLint**: Linting with React hooks and React refresh plugins
- Entry point: `src/main.jsx` renders App into `#root` div
