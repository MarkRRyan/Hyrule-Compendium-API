const express = require('express')
const monsters = require('./models/monsters')

const app = express();

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

app.listen(3000, () => {
    console.log(`Fighting monsters on 3000`);
});