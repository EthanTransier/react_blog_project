const express = require('express');
const router = express.Router();

const {
  getblogs,
  createblog
} = require('../controllers/blogs');

// router.get('/', getUsers);
router.get('/')
router.post('/', createblog);


module.exports = router;