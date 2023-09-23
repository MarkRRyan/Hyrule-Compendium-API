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
        image: `https://i.imgur.com/R5ZUAmd.png`,
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
        image: `https://i.imgur.com/YmdJwHN.png`,
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
    {
        compendiumId: 112,
        name: 'Like Like',
        commonLocations: [
            'Hyrule Field',
            'East Necluda'
        ],
        drops: [
            'Like Like Stone',
            'Arrow x 5'
        ],
        description: `A monster that has been appearing all over Hyrule in recent days. Found dwelling in caves and other dark places. It has an appetite for swords and shields. If you get too close, it may lunge at you with its mouth wide, swallow you whole, and eat your equipment. The tongue in the center of its mouth is very sensitive. Attack it to make the creature falter.`,
        image: `https://i.imgur.com/0haQArT.jpg`,
    },
    {
        compendiumId: 113,
        name: 'Fire Like',
        commonLocations: [
            'Eldin Mountains',
            'Eldin Mountain Depths'
        ],
        drops: [
            'Fire Like Stone',
            'Fire Fruit',
            'Arrow x 5'
        ],
        description: `These monsters live mostly in caves near volcanoes. They belch scorching fire out of their maws. There are still many mysteries about them, but it seems they don't do well in the cold. Don't get too close, or they'll gulp you up into their large gullets and give you an all-too-close look at their insides.`,
        image: `https://i.imgur.com/aNm7QaU.png`,
    },
    {
        compendiumId: 114,
        name: 'Ice Like',
        commonLocations: [
            'Mount Lanayru',
            'Gerudo Highlands'
        ],
        drops: [
            'Ice Like Stone',
            'Ice Fruit',
            'Arrow x 5'
        ],
        description: `These monsters live mostly in caves in snowy areas. They belch freezing cold air out of their maws. There are still many mysteries about them, but it seems they don't do well with fire. Don't get too close, or they'll gulp you up into their large gullets and give you an all-too-close look at their insides.`,
        image: `https://i.imgur.com/L99By4V.jpg`,
    },
    {
        compendiumId: 115,
        name: 'Shock Like',
        commonLocations: [
            'Hyrule Field',
            'East Necluda'
        ],
        drops: [
            'Shock Like Stone',
            'Shock Fruit',
            'Arrow x 5'
        ],
        description: `These monsters can be found all over Hyrule in dark places such as caves. They generate electricity inside their bodies and expel powerful lightning balls from their mouths. It's believed that they stun their prey this way, but there are still many unknowns about them.`,
        image: `https://i.imgur.com/Ki3u2CX.png`,
    },
    {
        compendiumId: 116,
        name: 'Rock Like',
        commonLocations: [
            'Eldin Mountains',
            'Lanayru Wetlands'
        ],
        drops: [
            'Like Like Stone',
            'Arrow x 5'
        ],
        description: `These monsters can be found all over Hyrule in dark places such as caves. They're covered in rocks that shield them like armor. They try to intimidate you by spitting rocks out of their mouths, but they can be quieted when they have swallowed something.`,
        image: `https://i.imgur.com/GcYidfu.png`,
    },
    {
        compendiumId: 117,
        name: 'Evermean',
        commonLocations: [
            'Great Hyrule Forest',
            'Hyrule Field'
        ],
        drops: [
            'Energetic Rhino Beetle',
            'Hightail Lizard',
            'Bladed Rhine Beette',
            'Rugged Rhino Beetle',
            'Acorn',
            'Chickaloo Tree Nut',
            'Golden Apple',
            'Monster Extract',
            'Korok Frond',
            'Sturdy Thick Stick'
        ],
        description: `A monster that mimics a tree, found throughout the forests of Hyrule. These imposters are hard to differentiate from the genuine article, making it easy for them to team up and pounce on unsuspecting passersby. Because the species shares characteristics with trees, it can be chopped down in much the same way.`,
        image: `https://i.imgur.com/E49ota0.png`,
    },
    {
        compendiumId: 118,
        name: 'Aerocuda',
        commonLocations: [
            'Greater Hyrule'
        ],
        drops: [
            'Aerocuda Wing',
            'Aerocuda Eyeball'
        ],
        description: `An airborne monster that can be recognized by its distinctive cries. They have strong, dexterous feet and can often be seen cruising through the sky with animals or other monsters in their clutches. Thankfully, the breed's lightweight, aerodynamic body makes it easy to shoot down.`,
        image: `https://i.imgur.com/hu2yZ7q.jpg`,
    },
    {
        compendiumId: 119,
        name: 'Gibdo',
        commonLocations: [
            'Gerudo Desert',
            'Gerudo Desert Depths'
        ],
        drops: [
            'Gibdo Guts',
            'Gibdo Bone'
        ],
        description: `A monster that appeared along with the sand shroud. Though slow to move, they can fight without faltering to physical attacks thanks to their tough outer skin. On the other hand, they are vulnerable to fire and lightning, which can turn them white and brittle.`,
        image: `https://i.imgur.com/e7qOXQ0.jpg`,
    },
    {
        compendiumId: 120,
        name: 'Moth Gibdo',
        commonLocations: [
            'Gerudo Desert',
            'Gerudo Desert Depths'
        ],
        drops: [
            'Gibdo Wing',
            'Gibdo Guts'
        ],
        description: `These monsters appeared along with the sand shroud. Winged horrors that attack quickly while in flight, they have tough skin that allows them to withstand physical attacks. Fire and lightning are effective against them.`,
        image: `https://i.imgur.com/tAW8Vqv.png`,
    },
    {
        compendiumId: 121,
        name: 'Bokoblin',
        commonLocations: [
            'Hyrule Field',
            'Central Hyrule Depths'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang'
        ],
        description: `This common species is a nuisance all over Hyrule. While not very clever, they are at least intelligent enough to hunt beasts and grill the meat for food. They are sometimes seen marching in groups. If they come at you, watch out for their sharp horns!`,
        image: `https://i.imgur.com/RbxzvIT.jpg`
    },
    {
        compendiumId: 122,
        name: 'Blue_Bokoblin',
        commonLocations: [
            'Hyrule Field',
            'Eldin Canyon'
        ],
        drops: [
            'Blue Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts'
        ],
        description: `This common species is a nuisance all over Hyrule. They're tougher than the red Bokoblins--and their horns are sharper, so watch out!`,
        image: `https://i.imgur.com/Yg0w4h8.png`
    },
    {
        compendiumId: 123,
        name: 'Black_Bokoblin',
        commonLocations: [
            'Gerudo Desert',
            'Hyrule Ridge Depths'
        ],
        drops: [
            'Black Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts'
        ],
        description: `Although Bokoblins are generally a nuisance, the Black Bokoblins are among the most dangerous type. They're extremely resilient and powerful, especially when it comes to their forceful attack with their hefty horns.`,
        image: `https://i.imgur.com/CZtWfds.png`
    },
    {
        compendiumId: 124,
        name: 'Stalkoblin',
        commonLocations: [
            'Great Hyrule Forest',
            'Gerudo Desert Depths'
        ],
        drops: [
            'Bokoblin Horn',
            'Bokobin Fang'
        ],
        description: `These remains of Bokoblins hate light and only move about in the dark. While they're fragile enough to crumble from a single blow, they have sharp horns. And as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting.`,
        image: `https://i.imgur.com/VGTGWhA.jpg`
    },
    {
        compendiumId: 125,
        name: 'Silver_Bokoblin',
        commonLocations: [
            'Greater Hyrule'
        ],
        drops: [
            'Silver Bokoblin Horn',
            'Bokobin Fang',
            'Bokoblin Guts'
        ],
        description: `You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. It's said that the Demon King's power marked their silver bodies with purple patterns. The magical glow at the tip of their horns may look funny at a glance, but don't take these creatures lightly, or the joke will be on you.`,
        image: `https://i.imgur.com/6WD9MSr.jpg`
    },
    {
        compendiumId: 126,
        name: 'Boss Bokoblin',
        commonLocations: [
            'Hyrule Field',
            'Hyrule Ridge'
        ],
        drops: [
            'Boss Bokoblin Fang',
            'Boss Bokoblin Horn'
        ],
        description: `These heavyweight monsters are leaders of Bokoblins. They swagger about, whistling commands to the teams of minions nervously trailing them. Their heavy horns are so sharp, they can live large trees clean in half.`,
        image: `https://i.imgur.com/w9qGrmH.png`,
    },
    {
        compendiumId: 127,
        name: 'Blue Boss Bokoblin',
        commonLocations: [
            'Hyrule Field',
            'Lanayru Great Spring'
        ],
        drops: [
            'Boss Bokoblin Guts',
            'Boss Bokoblin Fang',
            'Blue Boss Bokiblin Horn'
        ],
        description: `These heavyweight monsters are leaders of Bokoblins. They've got more stamina than the red variety, and they execute powerful punches and weapon attacks. The horns on their heads are sharper too.`,
        image: `https://i.imgur.com/ytJIzMe.jpg`,
    },
    {
        compendiumId: 128,
        name: 'Black Boss Bokoblin',
        commonLocations: [
            'Hyrule Field',
            'East Necluda'
        ],
        drops: [
            'Boss Bokoblin Guts',
            'Boss Bokoblin Fang',
            'Black Boss Bokoblin Horn'
        ],
        description: `These heavyweight monsters are leaders of Bokoblins, and this variety has very high stamina thanks to their large muscles. Even skilled warriors will find them challenging due to their coordinated attacks involving minions. And those horns are just pure evil.`,
        image: `https://i.imgur.com/5QkRpvx.png`,
    },
    {
        compendiumId: 129,
        name: 'Silver Boss Bokoblin',
        commonLocations: [
            'Greater Hyrule'
        ],
        drops: [
            'Boss Bokoblin Guts',
            'Boss Bokiblin Fang',
            'Silver Boss Bokoblin Horn'
        ],
        description: `The mightiest of all Boss Bokoblins. It's a wonder that they're related at all to the lowly, garden-variety Bokoblin. The evil power of the Demon King dwells in their bodies and horns, enabling formidable attacks. And watch out for the elite minions that hang around them too.`,
        image: `https://i.imgur.com/kxY74i7.png`,
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