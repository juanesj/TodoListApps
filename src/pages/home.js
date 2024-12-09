import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';

const Home = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <Box
      sx={{
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Bienvenido a ToDoListApp
      </Typography>
      <Typography variant="h5">Tareas Pendientes: {pendingTasks.length}</Typography>
      <Typography variant="h5" gutterBottom>
        Tareas Completadas: {completedTasks.length}
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/add-task"
          sx={{ marginRight: 2 }}
        >
          Agregar Tarea
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/task-list">
          Ver Lista de Tareas
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
