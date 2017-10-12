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
  .populate({
    path: 'author',
    select: 'username'
  })
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
    console.log('article author --->', article.author)
    console.log('req id--->', req.id)
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

var removeArticle = (req, res) => {
  Article.findById({_id: req.params.id})
  .then((article) => {
    console.log('ini author -----', article)
    console.log('ini req.id token -----', req.id)
    if(article.author == req.id){
      Article.findByIdAndRemove({
        _id: req.params.id
      })
      .then(() => {
        res.send({
          message:'Berhasil hapus data'
        })
      })
      .catch(err => console.log(err))
    } else{
      res.send({
        message: 'Bukan author'
      })
    }
  })
  .catch(err => console.log(err))
}

var getByAuthor = (req, res) => {
  console.log('masuk sini')
  Article.find({
    author: req.params.author
  })
  .populate('author', '_id username')
  .exec((err, result)=>{
    console.log('masuk sini reult -->---', result)
    if(err) res.send({err: err});
    res.json(result);
  })
}

var getByCategory = (req, res) => {
  Article.find({
    category: req.params.category
  })
  .populate('author', '_id username')
  .exec((err, result)=>{
    if(err) res.send({err: err});
    res.json(result);
  })
}


module.exports = {
  findAllArticle, createArticle,
  getArticle, updateArticle, removeArticle,
  getByAuthor, getByCategory
}
