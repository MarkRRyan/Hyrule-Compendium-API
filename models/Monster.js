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
      image: {
        type: String,
        required: true,
      },
})

const Monster = mongoose.model('Monster', monsterSchema)

module.exports = Monster