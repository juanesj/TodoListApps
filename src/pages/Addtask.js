import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('Trabajo');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description, type, completed: false });
    setTitle('');
    setDescription('');
    setType('Trabajo');
    navigate('/task-list');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Agregar Nueva Tarea
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          variant="outlined"
          fullWidth
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Descripción"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Tipo"
          select
          fullWidth
          value={type}
          onChange={(e) => setType(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          <MenuItem value="Trabajo">Trabajo</MenuItem>
          <MenuItem value="Casa">Casa</MenuItem>
          <MenuItem value="Negocios">Negocios</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Agregar Tarea
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;
