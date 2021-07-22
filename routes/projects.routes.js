const express = require('express');
const Project = require('../models/Project.model');
const router = express.Router();
const {
  getProjects,
  getProjectsById,
  createProjectPost,
  editProjectPut,
  deleteProject,
} = require('../controllers/projects.controllers.js');

router.get('/', getProjects);

router.get('/:_id', getProjectsById);

router.post('/create', createProjectPost);

router.put('/edit/:_id', editProjectPut);

router.delete('/delete/:_id', deleteProject);

module.exports = router;
