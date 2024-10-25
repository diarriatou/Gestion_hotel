const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

// Charger les variables d'environnement
dotenv.config();

// Initialisation de l'application
const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Servir les fichiers statiques dans le dossier 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Importer les routes
const hotelRoute = require('./routes/hotelRoute');

// Monter les routes
app.use('/api/hotels', hotelRoute);

const PORT = process.env.PORT || 5000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const corsOptions = {
  origin: 'http://localhost:3000', // ou l'URL de votre frontend
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
