// const monsters = [
//     {
//         name: 'Moblin',
//     },
//     {
//         name: 'Lynel',
//     },
//     {
//         name: 'Keese'
//     },
//     {
//         compendiumId: 103,
//         name: 'Bokoblin',
//         HP: 13,
//         commonLocations: [
//             'Great Plateau',
//             'West Necluda'
//         ],
//         drops: [
//             'Bokoblin Horn',
//             'Bokobin Fang'
//         ],
//         description: `This common species is a nuisance all over Hyrule. Some have unified in the time following the Great Calamity and have formed factions of bandits. While not very clever, they are at least intelligent enough to hunt beasts and grill the meat for food. Though they're typically ferocious carnivores, they actually enjoy fruit as well`
//     },
//     {
//         compendiumId: 104,
//         name: 'Blue_Bokoblin',
//         HP: 72,
//         commonLocations: [
//             'Gerudo Desert',
//             'Gerudo Highlands'
//         ],
//         drops: [
//             'Bokoblin Horn',
//             'Bokobin Fang',
//             'Bokoblin Guts'
//         ],
//         description: `This common species is a nuisance all over Hyrule. They're tougher and have stronger weapons than the red Bokoblins-and are a little more clever, as well. At the very least, they figured out that they can simply kick a remote bomb out of the way to avoid it's blast`
//     },
//     {
//         compendiumId: 105,
//         name: 'Black_Bokoblin',
//         HP: 240,
//         commonLocations: [
//             'Eldin Canyon',
//             'Gerudo Highlands'
//         ],
//         drops: [
//             'Bokoblin Horn',
//             'Bokobin Fang',
//             'Bokoblin Guts'
//         ],
//         description: `...`
//     },
//     {
//         compendiumId: 106,
//         name: 'Stalkoblin',
//         HP: 1,
//         commonLocations: [
//             'Hyrule Field',
//             'Great Hyrule Forest'
//         ],
//         drops: [
//             'Bokoblin Horn',
//             'Bokobin Fang',
//             'Bokoblin Arm'
//         ],
//         description: `The remains of Bokoblins appear in the dark of the night. While they're fragile enough to crumble from a single blow, as long as a skull remains intact, they'll continue to pull themselves back together and go on fighting. Sometimes a body will pick up the wrong skull, but this doesn't seem to be a problem...`
//     },
//     {
//         compendiumId: 107,
//         name: 'Silver_Bokoblin',
//         HP: 720,
//         commonLocations: [
//             'Greater Hyrule'
//         ],
//         drops: [
//             'Bokoblin Horn',
//             'Bokobin Fang',
//             'Bokoblin Guts',
//             'Amber',
//             'Opal',
//             'Topaz',
//             'Ruby',
//             'Sapphire',
//             'Diamond'
//         ],
//         description: `You would be foolish to call these Silver Bokoblins a mere nuisance. They have been influenced by Ganon's fiendish magic, so they are stronger than even the Black Bokoblins. They are called "silver" not only cause of their coloring, but also to donate their rarity. The purple markings help them stand out even more.`
//     },
// ]

// module.exports = monsters;
const mongoose = require('mongoose')

const monsterSchema = new mongoose.Schema({
    compendiumId: {
        type: Number,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: true,
      },
      HP: {
        type: Number,
        required: true,
      },
      commonLocations: {
        type: [String],
        required: true,
      },
      drops: {
        type: [String],
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster