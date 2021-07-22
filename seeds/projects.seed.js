const mongoose = require('mongoose');
const Project = require('../models/Project.model');
const db = require('../db.js');

const projectsSeed = [
  {
    name: 'Sink the float',
    date: '2021-01-15',
    type: 'videogame',
    technologies: ['Java'],
    isPublic: true,
    url: 'https://github.com/Cesar-Melia/HundirLaFlota',
    repoUrl: 'https://github.com/Cesar-Melia/HundirLaFlota',
    description: 'Game that consists of sinking ships by shooting with coordinates.',
    imgUrl: '../assets/images/projects/sink-the-float_800.png',
  },
  {
    name: 'Apple',
    date: '2021-05-15',
    type: 'frontend',
    technologies: ['HTML 5', 'CSS 3', 'Bootstrap', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://apple-front.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/web_apple',
    description: 'Apple frontpage',
    imgUrl: '../assets/images/projects/apple_800.png',
  },
  {
    name: 'Memory',
    date: '2021-05-10',
    type: 'videogame',
    technologies: ['Javascript', 'HTML 5', 'CSS 3', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://memory-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/memory_game',
    description:
      'Game that consists of discovering pairs of cards with the same drawing.',
    imgUrl: '../assets/images/projects/memory_800.png',
  },
  {
    name: 'Calculator',
    date: '2021-05-20',
    type: 'app',
    technologies: ['Javascript', 'HTML 5', 'CSS 3'],
    isPublic: true,
    url: 'https://calculator-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/calculator',
    description: 'Reply of Iphone calculator',
    imgUrl: '../assets/images/projects/calculator_800.png',
  },
  {
    name: 'Whac a whole',
    date: '2021-05-22',
    type: 'videogame',
    technologies: ['Javascript', 'HTML 5', 'CSS 3', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://whac-a-whole-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/whac_a_whole_game',
    description: 'Classic game in which you have to hunt the mole.',
    imgUrl: '../assets/images/projects/whac-a-mole_800.png',
  },
  {
    name: 'Who is who',
    date: '2021-05-24',
    type: 'videogame',
    technologies: ['Javascript', 'HTML 5', 'CSS 3', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://who-is-who-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/who_is_who_game',
    description:
      'Game that consists of guessing which of all the characters is the chosen one by asking different questions.',
    imgUrl: '../assets/images/projects/who-is-who_800.png',
  },
  {
    name: 'Shopeame',
    date: '2021-05-26',
    type: 'frontend',
    technologies: ['Javascript', 'HTML 5', 'CSS 3', 'Bootstrap', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://shopeame-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/shopeame',
    description: 'Web with product gallery and API management panel.',
    imgUrl: '../assets/images/projects/shopeame_800.png',
  },
  {
    name: 'Quiz Game',
    date: '2021-05-30',
    type: 'videogame',
    technologies: ['HTML 5', 'CSS 3', 'Javascript', 'Bootstrap', 'SASS', 'BEM'],
    isPublic: true,
    url: 'https://quiz-game-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/quiz-game',
    description: 'Quiz Game with multiple options to configure the question type.',
    imgUrl: '../assets/images/projects/quiz_800.png',
  },
  {
    name: 'Rick and Morty',
    date: '2021-06-02',
    type: 'frontend',
    technologies: ['Angular 12', 'Typescript', 'HTML 5', 'CSS 3', 'SASS', 'Bootstrap'],
    isPublic: true,
    url: 'https://rick-and-morty-proj.netlify.app/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/rick-and-morty-web',
    description:
      'Rick and Morty website with all the info about this cartoons TV program.',
    imgUrl: '../assets/images/projects/rick_800.png',
  },
  {
    name: 'Game of Thrones',
    date: '2021-06-06',
    type: 'frontend',
    technologies: [
      'Angular 12',
      'Typescript',
      'HTML 5',
      'CSS 3',
      'Bootstrap',
      'SASS',
      'ITCSS',
      'BEM',
    ],
    isPublic: true,
    url: 'https://got-project.netlify.app',
    repoUrl: 'https://gitlab.com/Cesar-Melia/game-of-thrones',
    description:
      'Website about this TV program with all the info about characters, houses, locations...',
    imgUrl: '../assets/images/projects/got_800.png',
  },
  {
    name: 'Personal Web',
    date: '2021-06-10',
    type: 'frontend',
    technologies: [
      'Angular 12',
      'Typescript',
      'HTML 5',
      'CSS 3',
      'Bootstrap',
      'SASS',
      'ITCSS',
      'BEM',
    ],
    isPublic: true,
    url: 'https://cesarmelia.com/',
    repoUrl: 'https://github.com/Cesar-Melia/cesar-melia-web',
    description: 'My personal website',
    imgUrl: '../assets/images/projects/cesar-melia_800.png',
  },
  {
    name: 'PC Shop API',
    date: '2021-06-18',
    type: 'backend',
    technologies: [
      'Node',
      'Express',
      'MongoDB',
      'Handlebars',
      'CSS 3',
      'SASS',
      'Bootstrap',
    ],
    isPublic: true,
    url: 'https://pc-shop-node.herokuapp.com/',
    repoUrl: 'https://gitlab.com/Cesar-Melia/pc-shop-backend',
    description: 'PC Shop backend with views.',
    imgUrl: '../assets/images/projects/pc-shop-back_800.png',
  },
];

mongoose
  .connect(db.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to the database from seed');

    const allProjects = await Project.find();
    console.log('All projects', allProjects);

    if (allProjects.length) {
      await Project.collection.drop();
      console.log('Collection successfully deleted.');
    }
  })
  .catch(error => {
    console.log('Error deleting Project collection', error);
  })
  .then(async () => {
    await Project.insertMany(projectsSeed);
    console.log('SUCCESS: Projects successfully added.');
  })
  .catch(error => {
    console.log('Error adding seed.', error);
  })
  .finally(() => mongoose.disconnect());
