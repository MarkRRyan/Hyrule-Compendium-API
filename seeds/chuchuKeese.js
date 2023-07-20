const mongoose = require('mongoose');
const Monster = require('../models/Monster');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  seedDatabase();
});

const monstersData = [
    
]

async function seedDatabase() {
  try {
    await Monster.deleteMany();

    const createdMonsters = await Monster.insertMany(monstersData);
    console.log('Seed data inserted:', createdMonsters);
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.disconnect();
  }
}