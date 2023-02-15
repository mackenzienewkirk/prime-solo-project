const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// const { rejectUnauthenticated } = require('../modules/authentication-middleware')


//GET route to get all endeavors 
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
});

//GET route to get specific endeavor
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

//GET route for NOTES table
// router.get('/', (req, res) => {
//   console.log('GET /api/notes');

//   const sqlQuery = `
//   SELECT * FROM "notes"
//   ORDER BY "id"
//   `
//   pool.query(sqlQuery)
//     .then((dbRes) => {
//       res.send(dbRes.rows);
//     })
//     .catch((dbErr) => {
//       console.log('GET things failed:', dbErr);
//       res.sendStatus(500);
//     })
// });

// //GET route for specific NOTES
// router.get('/:id', (req, res) => {
//   console.log('req.params.id', req.params.id);
//   const notesId = req.params.id;
//   const sqlQuery = `
//     SELECT * FROM "notes"
//     WHERE "notes"."id"=$1
//   `
//   const sqlValues = [notesId]
//   pool.query(sqlQuery, sqlValues)
//     .then((dbRes) => {
//       console.log('dbRes', dbRes.rows[0]);
//       res.send(dbRes.rows[0]);
//     })
//     .catch((dbErr) => {
//       console.log('GET /api/notes/:id fail:', dbErr);
//       res.sendStatus(500);
//     })
// })


//POST route to add a new endeavor
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.user);
  console.log('adding a new endeavor', req.body);
  const newEndeavor = req.body;
  const newTitle = req.body.titleInput;
  const newBudget = req.body.budgetInput;
  const newMaterials = req.body.materialsInput;
  const newInspiration = req.body.inspirationInput;
  const newDescription = req.body.descriptionInput;
  const newEndGoal = req.body.end_goalInput;
  const user_id = req.user.id;
  console.log('Adding new endeavor!', newEndeavor);

  const sqlText = `
  INSERT INTO "endeavor" ("title", "budget", "materials", "inspiration", "description", "end_goal", "user_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `;

  const sqlValues = [newTitle, newBudget, newMaterials, newInspiration, newDescription, newEndGoal, user_id];

  pool.query(sqlText, sqlValues)
  .then((response) => {
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
});

// router.post('/notes', (req, res) => {
//   // POST route code here
//   console.log(req.user);
//   console.log('adding a new note', req.body);
//   const newNote = req.body;
//   const newTitle = req.body.titleInput;
//   const newDescription = req.body.descriptionInput;
//   const endeavor_id = req.user.id;
//   console.log('Adding new note!', newNote);

//   const sqlText = `
//   INSERT INTO "endeavor" ("title", "description", "endeavor_id")
//   VALUES ($1, $2, $3,);
//   `;

//   const sqlValues = [newTitle, newDescription, endeavor_id];

//   pool.query(sqlText, sqlValues)
//   .then((response) => {
//   }).catch(err => {
//     console.log(err);
//     res.sendStatus(500);
//   })
// });

//PUT route to edit an endeavor
router.put('/:id', (req, res) => {
  // Update chosen endeavor
  const idToUpdate = req.params.id;
  const sqlText = `
    UPDATE "endeavor"
      SET "title"=$1
      "budget"=$2
      "materials"=$3
      "inspiration"=$4
      "description"=$5
      "end_goal"=$6
      "user_id"=$7
      WHERE id=$8
  `;
  pool.query(sqlText, [req.body.title, req.body.budget, req.body.materials, req.body.inspiration, req.body.description, req.body.end_goal, req.body.user_id,  idToUpdate])
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

//DELETE route to delete an endeavor
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
          console.log('id to delete', endeavorToDelete);
        })
        .catch((error) => {
          console.log('error in /api/endeavor DELETE', error);
          res.sendStatus(500);
        })
    } else {
      console.log('error: invalid user');
      res.send(403);
    }
  })
  .catch((err) => {
    console.log('err in /api/endeavor delete', err);
    res.sendStatus(500);
  })
});

module.exports = router;