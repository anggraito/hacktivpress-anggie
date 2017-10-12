const Article = require('../models/Article')

var createArticle = (req, res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.id
  })
  .then(article => {
    res.send({
      message: `Add article succes '${article.title}'`,
      article: article
    })
  })
  .catch(err => res.send(err))
}

var findAllArticle = (req, res) => {
  Article.find()
  .then(articles => {
    res.send(articles)
  })
  .catch(err => res.send(err))
}

var getArticle = (req, res) => {
  Article.findById(req.params.id)
  .then(article => {
    res.send(article)
  })
  .catch(err => res.send(err))
}


module.exports = {
  findAllArticle, createArticle,
  getArticle
}