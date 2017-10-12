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

var updateArticle = (req, res) => {
  Article.findById(req.params.id)
  .then(article => {
    console.log('article author', article.author)
    console.log('req id', req.id)
    if(article.author == req.id){
      article.title = req.body.title || article.title
      article.content = req.body.content || article.content
      article.category = req.body.category || article.category
      article.author = article.author
      
      article.save((err, result) => {
        if(err){
          res.send({
            message: err
          })
        }
        res.send({
          message: `Berhasil mengupdate ${result.title}`,
          result: result
        })
      })
    } else {
      res.status(500).send({
        message: 'bukan author konten ini',
        err: err
      })
    }
  })
  .catch(err => res.send(err))
}


module.exports = {
  findAllArticle, createArticle,
  getArticle, updateArticle
}