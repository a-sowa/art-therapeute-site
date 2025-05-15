const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');

// Initialiser Express
const app = express();

dotenv.config(); // AVANT d'appeler dbConnect()
// Connexion à la base de données
dbConnect();

// Middleware
app.use(cors());
app.use(express.json()); // Pour lire les requêtes en JSON

// Routes (à créer plus tard)
/* app.use('/api/auth', require('./routes/auth'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/users', require('./routes/users'));
app.use('/api/services', require('./routes/services'));
app.use('/api/admin', require('./routes/admin')); */

app.get('/', (req, res) => {
  res.send('🚀 Serveur Express opérationnel !');
});

module.exports = app;
