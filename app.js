const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const db = require('./db/db');
const PORT = 5000;

app.get('/api/v1/newPuzzle', (req, res) => {
   res.status(200).send({
       success: 'true',
       puzzle: db.puzzles[0]
   })
});

app.post('/api/v1/puzzleSolution', (req, res) => {
    let solution = null;
    res.status(200).send({
        success: 'true',
        puzzle: null
    });
});

app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
});
