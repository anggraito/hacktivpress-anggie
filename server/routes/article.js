const express = require('express')
const router = express.Router()
const setArticle = require('../controllers/article')
const auth = require('../helpers/auth')

router.get('/', setArticle.findAllArticle)
router.post('/', auth.isUser, setArticle.createArticle)

module.exports = router