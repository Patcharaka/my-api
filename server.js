const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors =require("cors")
const bodyParser = require('body-parser')
const con = require('./config/mongo');
const routeMember = require('./routes/routeMember')

const Member =require('./models/member')
app.use(cors())
app.use(express.json());
var movies = [
  {
      id: 0,
      name: "The Flash",
      type: "series",
      isPublished: false
  },
  {
      id: 1,
      name: "Arrow",
      type: "series",
      isPublished: true
  },
  {
      id: 2,
      name: "Harry Potter",
      type: "movie",
      isPublished: false
  }
];

//Connect Mongo DB
const config = mongoose.connect(con.URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
app.use('/member',routeMember)

app.listen(9000,()=> {
    console.log('Application is running on port 9000')
})
