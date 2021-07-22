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

const createProjectPost = async (req, res, next) => {
  try {
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
};

const editProjectPut = async (req, res, next) => {
  console.log('entra a put', req.body);

  const { _id } = req.params;

  try {
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

    const fieldsToUpdate = {};
    name && (fieldsToUpdate.name = name);
    date && (fieldsToUpdate.date = date);
    type && (fieldsToUpdate.type = type);
    technologies && (fieldsToUpdate.technologies = technologies);
    isPublic && (fieldsToUpdate.isPublic = isPublic);
    url && (fieldsToUpdate.url = url);
    repoUrl && (fieldsToUpdate.repoUrl = repoUrl);
    description && (fieldsToUpdate.description = description);
    imgUrl && (fieldsToUpdate.imgUrl = imgUrl);

    const updateProject = await Project.findByIdAndUpdate(_id, fieldsToUpdate, {
      new: true,
    });

    return res.status(200).json(updateProject);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
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
};

module.exports = {
  getProjects,
  getProjectsById,
  createProjectPost,
  editProjectPut,
  deleteProject,
};
