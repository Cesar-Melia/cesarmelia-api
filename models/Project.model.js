const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Shecma(
    {
        name: { type: String, required: true },
        date: { type: Date, required: true },
        type: { type: String, required: true, enum: [website, app, videogame, api] },
        technologies: { type: String },
        isPublic: { type: Boolean, required: true },
        url: { type: String },
        repoUrl: { type: String },
        description: { type: String, required: true },
    },
    {
        timestamp: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
