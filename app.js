const express = require('express');
const { cloudinary } = require('./config');
const db = require('./database');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route de base
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application Album de Chasse');
});

module.exports = app;
