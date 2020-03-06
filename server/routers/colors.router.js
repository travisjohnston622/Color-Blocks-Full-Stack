// ----------------------------------------------------------------------
// COLORS ROUTER
// for interacting with the `colors` table data and relational references
// ----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Route to get all of the available colors
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "colors"
                        ORDER BY "colors".id ASC;`;

    pool.query(queryText)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('Error with Colors GET:', err);
            res.sendStatus(500);
        });
});

// Route to save a new color option
router.post('/', (req, res) => {
    const newColor = req.body;
    console.log(newColor)
    const queryString = `INSERT INTO "colors" ("label", "hex_code")
    VALUES ('${newColor.label}', '${newColor.hex_code}');`;
    pool.query(queryString)
        .then((res) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// Route to update the label and/or hex_code associated with a specific color
router.put('/edit/:id', (req, res) => {
    const colorLabel = req.params.label;
    const colorHexCode = req.params.hex_code;
    const queryString = `UPDATE "colors" SET "label" = $2, "hex_code" = $3
    WHERE "id" = $1;`;
    pool.query(queryString, [colorLabel, colorHexCode])
        .then((res) => {
            console.log('colors updated')
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
})

// Route to delete a specific color option
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const queryString = `DELETE FROM "colors" WHERE id=$1;`;
    pool.query(queryString, [id])
        .then((res) => {
            console.log('removed')
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});
module.exports = router;
