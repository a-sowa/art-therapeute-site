const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ Route services opérationnelle');
});

module.exports = router;
