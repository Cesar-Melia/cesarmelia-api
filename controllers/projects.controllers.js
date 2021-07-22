const Project = require('../models/Project.model');

const getProjects = async (req, res) => {
  const { name, date, type, technologies, isPublic } = req.query;

  if (!name && !date && !type && !technologies && !isPublic) {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }

  if (name) {
    try {
      const projects = await Project.find({ name: name });
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }

  if (date) {
    try {
      const projects = await Project.find({ date: date });
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }

  if (type) {
    try {
      const projects = await Project.find({ type: type });
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }

  if (technologies) {
    try {
      const projects = await Project.find({ technologies: technologies });
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }

  if (isPublic) {
    try {
      const projects = await Project.find({ isPublic: isPublic });
      return res.status(200).json(projects);
    } catch (error) {
      return next(error);
    }
  }
};

const getProjectsById = async (req, res) => {
  try {
    const { _id } = req.params;
    const projects = await Project.findById({ _id });
    return res.status(200).json(projects);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getProjects, getProjectsById };
