const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'List files endpoint' });
});

router.post('/upload', (req, res) => {
  res.json({ message: 'Upload file endpoint' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete file endpoint' });
});

module.exports = router;
