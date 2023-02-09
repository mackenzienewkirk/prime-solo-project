const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * GET route template
 */

router.get('/', (req, res) => {
  // const currentUserID = req.user.id;
  console.log('GET /api/endeavor');

  const sqlQuery = `
  SELECT * FROM "endeavor"
  ORDER BY "id"
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

router.get('/:id', (req, res) => {
  console.log('req.params.id', req.params.id);
  const endeavorId = req.params.id;
  const sqlQuery = `
    SELECT * FROM "endeavor"
    WHERE "endeavor"."id"=$1
  `
  const sqlValues = [endeavorId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log('dbRes', dbRes.rows[0]);
      res.send(dbRes.rows[0]);
    })
    .catch((dbErr) => {
      console.log('GET /api/endeavor/:id fail:', dbErr);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);

  const insertEndeavorQuery = `
  INSERT INTO "endeavor" ("title", "budget", "materials", "inspiration", "description", "end_goal")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`

  pool.query(insertEndeavorQuery, [req.body.title, req.body.budget, req.body.materials, req.body.inspiration, req.body.description, req.body.end_goal])
  .then(result => {
    console.log('New endeavor id:', result.rows[0].id);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

router.delete('/:id', (req, res) => {
  console.log('in the delete route');
  console.log('user:', req.user);
  const endeavorToDelete = req.params.id;
  const sqlQuery = `
    SELECT "user_id" FROM "endeavor"
      WHERE "id" = $1;
  `;
  const sqlValue = [endeavorToDelete];
  pool.query(sqlQuery, sqlValue)
  .then((response) => {
    const userId = response.rows[0].user_id;
    console.log('userId:', userId);
    console.log('req.user.id:', req.user.id);
    if (userId === req.user.id) {
      const sqlQueryTwo = `
        DELETE FROM "endeavor"
          WHERE "id" = $1;
      `;
      const sqlValueTwo = [endeavorToDelete];
      pool.query(sqlQueryTwo, sqlValueTwo)
        .then((res) => {
          // res.sendStatus(200);
        })
        .catch((error) => {
          console.log('error in /api/endeavor DELETE', error);
          res.sendStatus(500);
        })
    } else {
      console.log('error: invalid user');
      res.sendStatus(403);
    }
  })
  .catch((err) => {
    console.log('err in /api/endeavor delete', err);
    res.sendStatus(500);
  })
});

module.exports = router;