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


// Route to delete a specific color block

module.exports = router;
