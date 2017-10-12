const User = require('../models/User');

var findAllUser = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => res.send(error))
}

var signUp = (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
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