import React from "react";

function TaskList({tasks, onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <tasks
          key={task.id}        // Unique key (assuming each task has an id)
          text={task.text}      
          category={task.category}  
          onDelete={() => onDeleteTask(task.id)} 
        />
      ))}
    </div>
  );
}

export default TaskList;
