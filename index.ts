import express, { Request, Response } from 'express';
import path from 'path';

// Initialiseer de express-app
const app = express();
const port = 3000;

// Stel de view engine in op EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serveer statische bestanden zoals CSS
app.use(express.static(path.join(__dirname, 'public')));

// Voorbeeldprojecten, deze kunnen dynamisch worden geladen uit een database of JSON
const projects = [
  {
    id: 1,
    title: "🧙 MTG Project – MagicThe Gathering Deck Builder",
    description: "",
info:"Een interactieve webapplicatie waarmee gebruikers kaarten kunnen zoeken, bekijken en beheren in eigen decks. Dankzij een API-integratie, zoomfunctie, deckbeheer en draw-testfunctie biedt dit project een alles-in-één ervaring voor verzamelaars en spelers.",
    link: "/projects/1", // Link naar de projectpagina
    tools: ["Node.js", "Express", "MongoDB"],
    images: [
      "/images/SCREEN.jpg",
      "/images/SCREEN.jpg",
    ]
  },
  {
    id: 2,
    title: "Project 2",
    description: "Een kort overzicht van Project 2.",
    link: "/projects/2",
    tools: ["React", "Tailwind CSS", "Firebase"],
    images: [
      "/images/project2-1.png",
      "/images/project2-2.png"
    ]
  },
  {
    id: 3,
    title: "Project 3",
    description: "Een kort overzicht van Project 3.",
    link: "/projects/3",
    tools: ["Vue.js", "Vuetify", "Node.js"],
    images: [
      "/images/project3-1.png",
      "/images/project3-2.png"
    ]
  }
];

// Route voor de homepage
app.get('/', (req: Request, res: Response) => {
  const name = "Zaida El Aissati";
  const about = "Ik ben een full-stack developer...";
  
  res.render('index', { name, about, projects });
});

// Route voor de detailpagina van een specifiek project
app.get('/projects/:id', (req: Request, res: Response) => {
  const projectId = parseInt(req.params.id);

  // Zoek het project op basis van de ID
  const project = projects.find(p => p.id === projectId);

  // Zorg ervoor dat je 'name' en 'about' ook meegeeft aan de view
  const name = "Zaida El Aissati";
  const about = "Ik ben een full-stack developer..."; // Je kunt dit dynamisch maken als je wilt
  
  if (project) {
    // Render de projectdetailspagina met het projectobject en extra gegevens
    res.render('project-detail', { project, name, about });
  } else {
    // Als project niet wordt gevonden, stuur 404 terug
    res.status(404).send('Project niet gevonden');
  }
});


// Start de server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
