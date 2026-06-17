const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List projects endpoint' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create project endpoint' });
});

module.exports = router;
