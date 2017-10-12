const User = require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken')
require('dotenv').config()

var findAllUser = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => res.status(500).send(error))
}

var signUp = (req, res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email
  })
  .then(user => {
    res.send({
      message: "Success create user",
      user: user
    })
  })
  .catch(error => res.status(500).send(error))
}

var signIn = (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .then(user => {
    var hashPassword = bcrypt.compareSync(req.body.password, user.password)
    if(hashPassword){
      var token = jwt.sign({
        id: user._id,
        username: user.username,
        email: user.email
      }, process.env.SECRET_JWT, { expiresIn: '1h' })
      res.send(token)
    } else{
      res.send({
        message: 'Passwordnya salah deh'
      })
    }
  })
  .catch(error => {
    res.status(500).send({
      message: 'Username tidak ada',
      error: error
    })
  })
}

module.exports = {
  findAllUser, signUp, signIn
}