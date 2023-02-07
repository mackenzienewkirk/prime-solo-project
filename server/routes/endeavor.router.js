const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * GET route template
 */

router.get('/', (req, res) => {
  // const currentUserID = req.user.id;

  const sqlQuery = `
  SELECT * FROM "endeavor"
  `
  pool.query(sqlQuery)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('GET things failed:', dbErr);
      res.sendStatus(500);
    })
     // For testing only, can be removed
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;