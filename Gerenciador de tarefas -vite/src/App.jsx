import { useState } from 'react';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Responder e-mails",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Revisar o relatório financeiro",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Planejar agenda semanal",
      isCompleted: false,
    },
  ]);
  
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    const addedTask = {
      id: newId,
      title: newTask,
      isCompleted: false,
    };

    setTasks([...tasks, addedTask]);
    setNewTask('');
  };

  const handleRemoveTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-slate-800 pt-12">
      <div className="p-6 bg-slate-500 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-white text-3xl font-bold mb-4">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onRemoveTask={handleRemoveTask} />
        <TaskForm 
          newTask={newTask} 
          setNewTask={setNewTask} 
          onAddTask={addTask} 
        />
      </div>
    </div>
  );
}

export default App;