import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, toggleTask, removeTask }) => {
  return (
    <div className="container">
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/"
        sx={{ marginBottom: 2 }}
      >
        Regresar a la Página Principal
      </Button>
      <Typography variant="h4" component="h1" gutterBottom>
        Lista de Tareas
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="h6">No hay tareas.</Typography>
      ) : (
        tasks.map((task, index) => (
          <div className="card" key={index}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {task.title}
              </Typography>
              <Typography color="text.secondary">{task.description}</Typography>
              <Typography color="text.secondary">Tipo: {task.type}</Typography>
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => toggleTask(index)}
                  sx={{ marginRight: 1 }}
                >
                  {task.completed ? 'Marcar como Pendiente' : 'Marcar como Completada'}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeTask(index)}
                  sx={{ marginRight: 1 }}
                >
                  Eliminar
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/task-details/${index}`}
                >
                  Ver Detalles
                </Button>
              </Box>
            </CardContent>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
