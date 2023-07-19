const express = require('express')
const Monster = require('../models/Monster')

const router = express.Router()

const app = express();
  
// Get All Route
app.get('/', async (req, res) => {
  try {
    const monsters = await Monster.find({});
    res.json(monsters);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});
  
  // New Route
  app.get('/new/', (req, res) => {
    res.send('form for new monster');
  });
  
  // Get By Param Route
  app.get('/:param', async (req, res) => {
    const param = req.params.param;
    let monster;
    // for searching by Id
    if (!isNaN(param)) {
      try {
        monster = await Monster.findOne({ compendiumId: parseInt(param) });
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
      }
    } else {
      // for searching by name
      try {
        monster = await Monster.findOne({ name: { $regex: new RegExp(`^${param}$`, 'i') } });
      } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  
    res.json(monster);
  });
  
module.exports = router