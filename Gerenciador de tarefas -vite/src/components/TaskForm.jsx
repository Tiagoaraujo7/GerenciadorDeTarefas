import React from 'react';

function TaskForm(props) {
  return (
    <form className='p-4 bg-slate-400 rounded-md shadow-md mt-4' onSubmit={props.onAddTask}>
      <input 
        type="text" 
        placeholder='Adicionar nova tarefa...'
        className='w-full p-2 rounded-md border-2 border-slate-300 text-black' 
        value={props.newTask}
        onChange={(e) => props.setNewTask(e.target.value)}
      />
      <button 
        type="submit"
        className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md font-bold hover:bg-blue-600 transition-colors"
      >
        Adicionar Tarefa
      </button>
    </form>
  );
}

export default TaskForm;