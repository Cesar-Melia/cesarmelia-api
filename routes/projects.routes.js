const express = require('express');
const Project = require('../models/Project.model');
const router = express.Router();
const {
  getProjects,
  getProjectsById,
  createProjectPost,
  editProjectPut,
} = require('../controllers/projects.controllers.js');

router.get('/', getProjects);

router.get('/:_id', getProjectsById);

router.post('/create', createProjectPost);

router.put('/edit/:_id', editProjectPut);

router.delete('/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params;
    let response = '';

    const deleted = await Project.findByIdAndDelete(_id);
    if (deleted) response = 'Project deleted from db';
    else response = "Can't find a project with this id.";

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
