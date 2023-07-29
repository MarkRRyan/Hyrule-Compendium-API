const mongoose = require('mongoose');
const Monster = require('./models/Monster');
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
    {
        compendiumId: 103,
        name: 'Bokoblin',
        HP: 13,
        commonLocations: [
            'Great Plateau',
            'West Necluda'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang'
        ],
        description: `This common species is a nuisance all over Hyrule. Some have unified in the time following the Great Calamity and have formed factions of bandits. While not very clever, they are at least intelligent enough to hunt beasts and grill the meat for food. Though they're typically ferocious carnivores, they actually enjoy fruit as well`,
        image: `https://i.imgur.com/Va5iIw5.jpg`
    },
    {
        compendiumId: 104,
        name: 'Blue_Bokoblin',
        HP: 72,
        commonLocations: [
            'Gerudo Desert',
            'Gerudo Highlands'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts'
        ],
        description: `This common species is a nuisance all over Hyrule. They're tougher and have stronger weapons than the red Bokoblins-and are a little more clever, as well. At the very least, they figured out that they can simply kick a remote bomb out of the way to avoid it's blast`,
        image: `https://i.imgur.com/tFKITMk.png`
    },
    {
        compendiumId: 105,
        name: 'Black_Bokoblin',
        HP: 240,
        commonLocations: [
            'Eldin Canyon',
            'Gerudo Highlands'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts'
        ],
        description: `...`,
        image: `https://i.imgur.com/FfufpDq.jpg`
    },
    {
        compendiumId: 106,
        name: 'Stalkoblin',
        HP: 1,
        commonLocations: [
            'Hyrule Field',
            'Great Hyrule Forest'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Arm'
        ],
        description: `The remains of Bokoblins appear in the dark of the night. While they're fragile enough to crumble from a single blow, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting. Sometimes a body will pick up the wrong skull, but this doesn't seem to be a problem...`,
        image: `https://i.imgur.com/9cR2uw4.jpg`
    },
    {
        compendiumId: 107,
        name: 'Silver_Bokoblin',
        HP: 720,
        commonLocations: [
            'Greater Hyrule'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts',
            'Amber',
            'Opal',
            'Topaz',
            'Ruby',
            'Sapphire',
            'Diamond'
        ],
        description: `You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. They are called "silver" not only cause of their coloring, but also to donate their rarity. The purple markings help them stand out even more.`,
        image: `https://i.imgur.com/6NnIwpG.jpg"`
    },
]

async function seedDatabase() {
  try {
    // await Monster.deleteMany();

    const createdMonsters = await Monster.insertMany(monstersData);
    console.log('Seed data inserted:', createdMonsters);
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    mongoose.disconnect();
  }
}