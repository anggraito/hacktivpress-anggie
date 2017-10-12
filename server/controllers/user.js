const User = require('../models/User');

var findAllUser = (req, res) => {
  User.find()
  .then((users) => {
    res.send(users)
  })
  .catch(error => {
    res.send(error)
  })
}

module.exports = {
  findAllUser
}