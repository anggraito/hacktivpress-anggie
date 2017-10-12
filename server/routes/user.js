const express = require('express');
const router = express.Router();
const modelUser = require('../controllers/user');

router.get('/users', modelUser.findAllUser)
router.post('/signup', modelUser.signUp)

module.exports = router;