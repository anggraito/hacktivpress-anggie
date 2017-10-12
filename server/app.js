const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      axios = require('axios');
const user = require('./routes/user');
      // question = require('./routes/question'),
      // answer = require('./routes/answer');
const app = express();
const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect database
var url = 'mongodb://anggraito:anggi123@cluster0-shard-00-00-vv98n.mongodb.net:27017,cluster0-shard-00-01-vv98n.mongodb.net:27017,cluster0-shard-00-02-vv98n.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
   console.log('Youare connected in this database')
});

// route setting use
app.use('/users', user)
// app.use('/questions', question)
// app.use('/answer', answer)


app.listen(port);
console.log('Your presentation is running on http://localhost:' + port);