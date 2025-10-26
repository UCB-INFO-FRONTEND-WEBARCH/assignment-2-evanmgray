import { useState } from "react";
/*

What does this component do?

This component, TaskItem, keeps the top right task count updated in the task management application.

*/

function TaskCounter({ totalTasks, completedTasks }) {
  return (
    <div className="site-header__count">
      {totalTasks}/{completedTasks}
    </div>
  );
}

export default TaskCounter;
