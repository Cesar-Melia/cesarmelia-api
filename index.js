const express = require("express");

const db = require("./db.js");
const Project = require("./models/Project.model");

const PORT = 4500;

server = express();

router = express.Router();

router.get("/", (req, res) => {
    return res.send("Cesar Melia Projects");
});

router.get("/projects", async (req, res) => {
    const { name } = req.query;
    const { date } = req.query;
    const { type } = req.query;
    const { technologies } = req.query;
    const { isPublic } = req.query;

    if (!name && !date && !type && !technologies && !isPublic) {
        try {
            const projects = await Project.find();
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (name) {
        try {
            const projects = await Project.find({ name: name });
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (date) {
        try {
            const projects = await Project.find({ date: date });
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (type) {
        try {
            const projects = await Project.find({ type: type });
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (technologies) {
        try {
            const projects = await Project.find({ technologies: technologies });
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    if (isPublic) {
        try {
            const projects = await Project.find({ isPublic: isPublic });
            return res.status(200).json(projects);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
});

router.get("/projects/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const projects = await Project.find({ name: name });
        return res.status(200).json(projects);
    } catch {
        return res.status(500).json(error);
    }
});

sever.use("/", router);

server.lsten(PORT, () => {
    console.log(`Server listening in port: ${PORT}`);
});
