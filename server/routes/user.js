const express = require('express');
const router = express.Router();
const modelUser = require('../controllers/user');

router.get('/', modelUser.findAllUser)

module.exports = router;