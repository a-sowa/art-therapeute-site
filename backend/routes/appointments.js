const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('✅ Route appointments opérationnelle');
});

module.exports = router;
