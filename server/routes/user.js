const express = require('express');
const router = express.Router();
const modelUser = require('../controllers/user');

router.get('/users', modelUser.findAllUser)

module.exports = router;