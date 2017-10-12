const jwt = require('jsonwebtoken')
require('dotenv').config()

var isUser = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_JWT , function(err, decoded) {
    if(!err){
      req.id = decoded.id
      req.username = decoded.username
      req.email = decoded.email
      console.log('ini req.user', req.username)
      console.log('ini req id', req.id)
      console.log('ini email', req.email)
      next()
    } else {
      res.send({
        message: 'Tidak teroganisir',
        err: err
      })
    }
  });
}

module.exports = {
  isUser
}