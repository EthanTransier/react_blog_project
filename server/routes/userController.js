const express = require('express');
const router = express.Router();

const {
  getUsers,
  createUsers,
  deleteUsers,
} = require('../controllers/users');

const {
  login
} = require('../middleware/login')

router.get('/', getUsers);
router.post('/', createUsers);
router.post('/login', login)
router.delete('/:id', deleteUsers);

module.exports = router;