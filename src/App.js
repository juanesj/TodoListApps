import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; 
import AddTask from './pages/Addtask';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';

function App() {
  const [tasks, setTasks] = useState([]);

  // Función para agregar una tarea
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para alternar el estado de completado de una tarea
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Función para eliminar una tarea
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/add-task" element={<AddTask addTask={addTask} />} />
        <Route path="/task-details/:id" element={<TaskDetails tasks={tasks} />} />
        <Route
          path="/task-list"
          element={<TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
