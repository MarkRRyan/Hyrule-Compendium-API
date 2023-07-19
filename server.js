const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const monsterRoutes = require('./routes/monsterRoutes')

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

// Routing
app.get('/', (req, res) => {
    res.send('Welcome to Hyrule')
})
app.use('/monsters', monsterRoutes)


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Fighting monsters on ${PORT}`);
});