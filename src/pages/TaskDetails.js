import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const TaskDetails = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks[parseInt(id, 10)];

  if (!task) {
    return (
      <div className="container">
        <Typography variant="h6">No se encontró la tarea.</Typography>
        <Button variant="outlined" component={Link} to="/task-list">
          Regresar a la Lista
        </Button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <Typography variant="h4" component="h1" gutterBottom>
          Detalles de la Tarea
        </Typography>
        <Typography variant="h5">Título: {task.title}</Typography>
        <Typography>Descripción: {task.description}</Typography>
        <Typography>Tipo: {task.type}</Typography>
        <Typography>
          Estado: {task.completed ? 'Completada' : 'Pendiente'}
        </Typography>
        <Button variant="outlined" component={Link} to="/task-list" sx={{ marginTop: 2 }}>
          Regresar a la Lista
        </Button>
      </div>
    </div>
  );
};

export default TaskDetails;
