const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUsers,
  deleteUsers,
  getUser
} = require('../controllers/users');

router.get('/home', getUsers);
router.post('/home', createUsers);
router.delete('/:id', deleteUsers);

module.exports = router;