// Middleware vide pour l'instant
module.exports = (req, res, next) => {
  console.log('🔐 Middleware auth appelé');
  next();
};
