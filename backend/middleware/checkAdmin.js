// Middleware vide pour l'instant
module.exports = (req, res, next) => {
  console.log('🔐 Middleware admin appelé');
  next();
};
