const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CardRoute = require('./routes/Card');

//App Config
const app = express();
//Middleware
app.use(express.json());
app.use(cors);
app.use('/api', CardRoute);
//DB Config
mongoose
  .connect('mongodb+srv://mbathi:shanicecole@cluster0.hex8l.mongodb.net/Dating?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
//API Endpoints

//Listener
app.listen(5001, () => console.log(`Listening on localhost`))