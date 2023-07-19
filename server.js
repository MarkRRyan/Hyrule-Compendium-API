const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const monsters = require('./models/monsters')

const app = express();

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Connection to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });

// Controllers

app.get('/', (req, res) => {
    res.send('Welcome to Hyrule')
})

// Get All Route
app.get('/monsters/', (req, res) => {
    res.send(monsters)
})

// New Route
app.get('/monsters/new/', (req, res) => {
    res.send('form for new monster')
})



// Get By Param Route

app.get('/monsters/:param', (req, res) => {
    const param = req.params.param
    let monster
    // for searching by Id
    if (!isNaN(param)) {
        monster = monsters.find(function(i) {
            return i.compendiumId === parseInt(param)
        })
    } else {
        // for searching by name
        monster = monsters.find(function (i) {
            return i.name.toLowerCase() === param.toLowerCase()
        })
    }

    res.send(monster)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Fighting monsters on ${PORT}`);
});