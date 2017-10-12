const express = require('express')
const router = express.Router()
const setArticle = require('../controllers/article')
const auth = require('../helpers/auth')

router.get('/', setArticle.findAllArticle)
router.post('/', auth.isUser, setArticle.createArticle)
router.get('/:id', setArticle.getArticle)
router.put('/:id', auth.isUser, setArticle.updateArticle)
router.delete('/:id', auth.isUser, setArticle.removeArticle)
router.get('/author/:author', setArticle.getByAuthor);
router.get('/category/:category', setArticle.getByCategory);

module.exports = router