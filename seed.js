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
        compendiumId: 93,
        name: 'Chuchu',
        commonLocations: [
            'Hyrule Field',
            'Necluda',
            'The Great Plateau',
            'Akkala'
        ],
        drops: ['Chuchu Jelly'],
        description: 'This low-level, gel-based monster can be found all over Hyrule. It tends to spring its attacks on unsuspecting prey from the ground or from trees. Its strength varies by size, and the type of jelly it drops varies depending on whether the Chuchu was heated up, cooled down, or shocked.',
        image: `https://i.imgur.com/FUmqch2.jpg`,
    },
    {
        compendiumId: 94,
        name: 'Fire Chuchu',
        commonLocations: [
            'Eldin Mountains',
            'Eldin Mountain Depths'
        ],
        drops: ['Red Chuchu Jelly'],
        description: 'This low-level gel monster is engulfed in flames. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised. If this is unavailable, then wait until after the monster attacks, for it will cool down and allow you to wack it one or two times.',
        image: `https://i.imgur.com/mw1U1dg.jpg`,
    },
    {
        compendiumId: 95,
        name: 'Ice Chuchu',
        commonLocations: [
            'Gerudo Highlands',
            'Hebra Mountains'
        ],
        drops: ['Ice Chuchu Jelly'],
        description: `This low-level gel monster is engulfed in freezing-cold air. It's strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised. However, after it attacks, it will heat up, allowing you to land one or two melee hits without a drawback.`,
        image: `https://i.imgur.com/Va5iIw5.jpg`,
    },
    {
        compendiumId: 96,
        name: 'Electric Chuchu',
        commonLocations: [
            'Gerudo Highlands',
            'East Necluda'
        ],
        drops: ['Yellow Chuchu Jelly'],
        description: `This low-level gel monster is engulfed in electricity. Its strength varies depending on its size. It tends to explode if attacked from close range, so the use of spears, arrows, and other ranged weapons is advised. However, after attacking, it will lose its outer shell of electricity for a few moments, giving you one or two opportunity attacks before the monster recovers.`,
        image: `https://i.imgur.com/eKXrR3W.jpg`,
    },
    {
        compendiumId: 97,
        name: 'Keese',
        commonLocations: [
            'Hyrule Field',
            'East Necluda'
        ],
        drops: [
            'Keese Wing',
            'Keese Eyeball'
        ],
        description: `The unpredictable flight pattern of this nocturnal bat-like species can make fighting them a nuisance, but they're weak enough to fell with a single strike. Sometimes they'll attack in swarms, but even then, a pack can be sent "packing" with a single attack.`,
        image: `https://i.imgur.com/eKXrR3W.jpg`,
    },
    {
        compendiumId: 98,
        name: 'Fire Keese',
        commonLocations: [
            'Eldin Mountains',
            'Eldin Mountain Depths'
        ],
        drops: [
            'Fire Keese Wing',
            'Fire Keese Eyeball'
        ],
        description: `The fire that engults the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of setting fire to anything they touch`,
        image: `https://i.imgur.com/7p90kGJ.jpg`
    },
    {
        compendiumId: 99,
        name: 'Ice Keese',
        commonLocations: [
            'Hebra Mountains',
            'Mount Lanayru'
        ],
        drops: [
            'Ice Keese Wing',
            'Ice Keese Eyeball'
        ],
        description: `The intense frost that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of freezing anything they touch.`,
        image: `https://i.imgur.com/RDeKtez.jpg`,
    },
    {
        compendiumId: 100,
        name: 'Electric Keese',
        commonLocations: [
            'Gerudo Desert',
            'Gerudo Desert Depths'
        ],
        drops: [
            'Electric Keese Wing',
            'Electric Keese Eyeball'
        ],
        description: `The electricity that engulfs the bodies of these bat-like Keese makes them more dangerous than the standard type. They're capable of shocking anything they touch`,
        image: `https://i.imgur.com/lySQINC.jpg`,
    },
    {
        compendiumId: 101,
        name: 'Water Octorok',
        commonLocations: [
            'Lanayru Great Spring',
            'West Necluda'
        ],
        drops: [
            'Octorok Eyeball',
            'Octorok Tentacle',
            'Octo Balloon'
        ],
        description: `Although they spend most of their time in water, they burst out when they sense someone. The rocks they spit out can be bounced back with a shield.`,
        image: `https://i.imgur.com/zntIooZ.jpg`,
    },
    {
        compendiumId: 102,
        name: 'Forest Octorok',
        commonLocations: [
            'Hyrule Ridge',
            'Deep Akkala'
        ],
        drops: [
            'Octorok Eyeball',
            'Octorok Tentacle',
            'Octo Balloon'
        ],
        description: `Although originally an aquatic species, this type has adapted to life in the forest. They hide among the trees, disguising themselves as grass or unassuming shrubbery, and then attack when someone wanders by.`,
        image: `https://i.imgur.com/aMSxZ4M.jpg`,
    },
    {
        compendiumId: 103,
        name: 'Rock Octorok',
        commonLocations: [
            'Death Mountain',
            'Eldin Canyon'
        ],
        drops: [
            'Octorok Eyeball',
            'Octorok Tentacle',
            'Octo Balloon'
        ],
        description: `This octopus-like species of monster lives in volcanic regions. When they inhale, they're preparing to spit out flaming rocks. Be aware of that powerful suction.`,
        image: `https://i.imgur.com/rYx6XiA.jpg`,
    },
    {
        compendiumId: 104,
        name: 'Snow Octorok',
        commonLocations: [
            'Gerudo Highlands',
            'Hebra Mountains'
        ],
        drops: [
            'Octorok Eyeball',
            'Octorok Tentacle',
            'Octo Balloon'
        ],
        description: `These octopus-like monsters live in snowy fields and disguise themselves as grass. When someone wanders by, they spring into action and attack by spitting snowballs.`,
        image: `https://i.imgur.com/349h7Vb.jpg`,
    },
    {
        compendiumId: 105,
        name: 'Treasure Octorok',
        commonLocations: [
            'Faron Grasslands',
            'Gerudo Highlands'
        ],
        drops: [
            'Octorok Eyeball',
            'Octo Balloon',
            'Green Rupee',
            'Blue Rupee',
            'Red Rupee',
            'Purple Rupee',
            'Silver Rupee'
        ],
        description: `These particularly clever monsters bury themselves in deep sand or snow and disguise themselves as treasure chests. Anyone who approaches the chests is attacked. It is said that the treasure chests on their heads are actually parts of these monsters' bodies.`,
        image: `https://i.imgur.com/U5j1ZnZ.jpg`,
    },
    {
        compendiumId: 106,
        name: 'Fire Wizzrobe',
        commonLocations: [
            'Hyrule Field',
            'Eldin Canyon'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They hurl fireballs, summon flaming monsters, and have been known to severely raise the temperature around them. The weather will normalize once the Wizzrobe is defeated.`,
        image: `https://i.imgur.com/pG6nTp7.jpg`,
    },
    {
        compendiumId: 107,
        name: 'Ice Wizzrobe',
        commonLocations: [
            'Tabantha Tundra',
            'Hebra Mountains'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They create freezing blasts of air, summon frozen monsters, and have been known to cause blizzards to severely decrease the temperature around them. The weather will normalize once the Wizzrobe is defeated.`,
        image: `https://i.imgur.com/Zc9WlOQ.jpg`,
    },
    {
        compendiumId: 108,
        name: 'Electric Wizzrobe',
        commonLocations: [
            'Lanayru Great Spring',
            'Tabantha Frontier'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They hurl balls of electricity, summon monsters surging with electricity, and have been known to cause thunderstorms in the area. The weather will normalize once the Wizzrobe is defeated.`,
        image: `https://i.imgur.com/0vEHhgv.jpg`,
    },
    {
        compendiumId: 109,
        name: 'Meteo Wizzrobe',
        commonLocations: [
            'Gerudo Highlands',
            'Akkala Highlands'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They hurl multiple fireballs, summon flaming monsters, and have been known to severely raise the temperature around them. They are more resilient than Fire Wizzrobes.`,
        image: `https://i.imgur.com/WbYD2w3.jpg`,
    },
    {
        compendiumId: 110,
        name: 'Blizzrobe',
        commonLocations: [
            'Gerudo Highlands'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They use staves to create freezing blasts of air or to summon frozen monsters and have been known to cause blizzards to severely decrease the temperature around them. They are more dangerous than Ice Wizzrobes.`,
        image: `https://i.imgur.com/l8zAxgz.jpg`,
    },
    {
        compendiumId: 111,
        name: 'Thunder Wizzrobe',
        commonLocations: [
            'Lanayru Great Spring',
            'East Necluda'
        ],
        drops: [
            'none'
        ],
        description: `These spell-casting monsters can be found all over Hyrule. They hurl multiple balls of electricity, summon monsters surging with electricity, and have been known to cause thunderstorms in the area. They are more resilient and dangerous than Electric Wizzrobes.`,
        image: `https://i.imgur.com/0Nke2IT.jpg`,
    },

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