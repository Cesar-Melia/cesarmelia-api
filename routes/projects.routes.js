const express = require('express');
const Project = require('../models/Project.model');
const router = express.Router();
const {
  getProjects,
  getProjectsById,
} = require('../controllers/projects.controllers.js');

router.get('/', getProjects);

router.get('/:_id', getProjectsById);

/////////////////////////////////////////////////////////////////
router.post('/create', async (req, res, next) => {
  try {
    console.log('entra a post', req.body);

    const {
      name,
      date,
      type,
      technologies,
      isPublic,
      url,
      repoUrl,
      description,
      imgUrl,
    } = req.body;

    console.log(name);
    const newProject = new Project({
      name,
      date,
      type,
      technologies,
      isPublic,
      url,
      repoUrl,
      description,
      imgUrl,
    });

    const createdProject = await newProject.save();

    return res.status(201).json(createdProject);
  } catch (error) {
    return next(error);
  }
});

/////////////////////////////////////////////////////////////////
router.put('/edit', async (req, res, next) => {
  console.log('entra a put', req.body);

  try {
    const {
      _id,
      name,
      date,
      type,
      technologies,
      isPublic,
      url,
      repoUrl,
      description,
      imgUrl,
    } = req.body;

    const fieldsToUpdate = {};
    if (name) fieldsToUpdate.name = name;
    if (date) fieldsToUpdate.date = date;
    if (type) fieldsToUpdate.type = type;
    if (technologies) fieldsToUpdate.technologies = technologies;
    if (isPublic) fieldsToUpdate.isPublic = isPublic;
    if (url) fieldsToUpdate.url = url;
    if (repoUrl) fieldsToUpdate.repoUrl = repoUrl;
    if (description) fieldsToUpdate.description = description;
    if (imgUrl) fieldsToUpdate.imgUrl = imgUrl;

    const updateProject = await Project.findByIdAndUpdate(_id, fieldsToUpdate, {
      new: true,
    });

    return res.status(200).json(updateProject);
  } catch (error) {
    next(error);
  }
});

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
