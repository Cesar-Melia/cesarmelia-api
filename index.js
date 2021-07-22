const express = require('express');
const cors = require('cors');

const indexRoutes = require('./routes/index.routes');
const projectsRoutes = require('./routes/projects.routes');
const db = require('./db.js');
require('dotenv').config();

db.connect();

const PORT = process.env.PORT || 3500;

server = express();

server.use(
  cors({
    origin: ['http://localhost:3500', 'http://localhost:4000', 'http://localhost:4200'],
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', indexRoutes);
server.use('/projects', projectsRoutes);

server.use('*', (req, res) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;

  return res.status(404).json(error);
});

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
  console.log(`Server listening in port: ${PORT}`);
});
