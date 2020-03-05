// ----------------------------------------------------------------------
// BLOCKS ROUTER
// for interacting with the `blocks` table data and relational references
// ----------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Route to get all saved color blocks
router.get('/', (req, res) => {
    const queryString = `SELECT "blocks".id, "colors".label, "colors".hex_code
    FROM "blocks"
    JOIN "colors" ON "blocks".color_id = "colors".id;`;
    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// Route to save new color blocks item
router.post('/', (req, res) => {
    const newSwatch = req.body;
    console.log(newSwatch)
    const queryString = `INSERT INTO "blocks" ("color_id")
    VALUES ('${newSwatch.id}');`;
    pool.query(queryString)
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// Route to delete a specific color block
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const queryString = `DELETE FROM "blocks" WHERE id=$1;`;
    pool.query(queryString, [id])
        .then((result) => {
            console.log('removed')
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
});

module.exports = router;
