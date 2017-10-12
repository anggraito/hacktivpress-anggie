const User = require('../models/User');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var findAllUser = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => res.send(error))
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
  .catch(error => res.send(error))
}

module.exports = {
  findAllUser, signUp
}