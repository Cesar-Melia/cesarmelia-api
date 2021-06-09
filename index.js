const express = require("express");

const db = require("./db.js");
db.connect();

const Project = require("./models/Project.model");

const PORT = 4000;

server = express();

router = express.Router();

router.get("/", (req, res) => {
    return res.send("Cesar Melia Projects");
});

router.get("/projects", async (req, res) => {
    const { name, date, type, technologies, isPublic } = req.query;

    if (!name && !date && !type && !technologies && !isPublic) {
        try {
            const projects = await Project.find();
            console.log(projects);
            return res.status(200).json(projects);
        } catch (error) {
            console.log("catch error", error);
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
    } catch (error) {
        return res.status(500).json(error);
    }
});

server.use("/", router);

server.listen(PORT, () => {
    console.log(`Server listening in port: ${PORT}`);
});
