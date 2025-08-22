import React from 'react';

function Tasks(props) {
  return (
    <ul className="space-y-4 p-4 bg-slate-200 rounded-md shadow-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="bg-slate-400 text-white p-2 rounded-md flex justify-between items-center">
          {task.title}
          <button 
            className="ml-4 p-1 bg-blue-500 text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={() => props.onRemoveTask(task.id)}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;