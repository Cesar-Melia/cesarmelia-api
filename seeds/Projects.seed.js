const mongoose = require("mongoose");
const Project = require("../models/Project.model");
const db = require("../db.js");

const projectsSeed = [
    {
        name: "sink the float",
        date: new Date("2021-01-15"),
        type: "videogame",
        technologies: ["Java"],
        isPublic: true,
        url: "",
        repoUrl: "https://github.com/Cesar-Melia/HundirLaFlota",
        description: "Game that consists of sinking ships by shooting with coordinates.",
    },
    {
        name: "apple",
        date: new Date("2021-05-15"),
        type: "website",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/web_apple",
        description: "Apple frontpage",
    },
    {
        name: "memory",
        date: new Date("2021-05-10"),
        type: "videogame",
        technologies: ["HTML", "CSS", "SASS", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/memory_game",
        description: "Game that consists of discovering pairs of cards with the same drawing.",
    },
    {
        name: "calculator",
        date: new Date("2021-05-20"),
        type: "app",
        technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/calculator",
        description: "Reply of Iphone calculator",
    },
    {
        name: "whac a whole",
        date: new Date("2021-05-22"),
        type: "videogame",
        technologies: ["HTML", "CSS", "SASS", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/whac_a_whole_game",
        description: "Classic game in which you have to hunt the mole.",
    },
    {
        name: "who is who",
        date: new Date("2021-05-24"),
        type: "videogame",
        technologies: ["HTML", "CSS", "SASS", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/who_is_who_game",
        description:
            "Game that consists of guessing which of all the characters is the chosen one by asking different questions.",
    },
    {
        name: "shopeame",
        date: new Date("2021-05-26"),
        type: "website",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/shopeame",
        description: "Web with product gallery and API management panel.",
    },
    {
        name: "quiz game",
        date: new Date("2021-05-30"),
        type: "videogame",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/quiz-game",
        description: "Quiz Game with multiple options to configure the question type.",
    },
    {
        name: "game of thrones",
        date: new Date("2021-06-02"),
        type: "website",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript", "Angular"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/game-of-thrones",
        description:
            "Website about this TV program with all the info about characters, houses, locations...",
    },
    {
        name: "rick and morty",
        date: new Date("2021-06-02"),
        type: "website",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript", "Angular"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/rick-and-morty-web",
        description: "Rick and Morty website with all the info about this cartoons TV program.",
    },
    {
        name: "game of thrones",
        date: new Date("2021-06-06"),
        type: "website",
        technologies: ["HTML", "CSS", "SASS", "Bootstrap", "Javascript", "Angular"],
        isPublic: true,
        url: "",
        repoUrl: "https://gitlab.com/Cesar-Melia/game-of-thrones",
        description:
            "Website about this TV program with all the info about characters, houses, locations...",
    },
];

mongoose
    .connect(db.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Connected to the database from seed");

        const allProjects = await Project.find();
        console.log("All projects", allProjects);

        if (allProjects.length) {
            await Project.collection.drop();
            console.log("Collection successfully deleted.");
        }
    })
    .catch((error) => {
        console.log("Error deleting Project collection", error);
    })
    .then(async () => {
        await Project.insertMany(projectsSeed);
        console.log("SUCCESS: Projects successfully added.");
    })
    .catch((error) => {
        console.log("Error adding seed.", error);
    })
    .finally(() => mongoose.disconnect());
