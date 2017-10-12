const express = require('express');
const router = express.Router();
const setUser = require('../controllers/user');

router.get('/users', setUser.findAllUser)
router.post('/signup', setUser.signUp)
router.post('/signin', setUser.signIn)

module.exports = router;