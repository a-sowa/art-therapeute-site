const app = require('./app');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
