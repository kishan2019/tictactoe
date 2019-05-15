const express = require('express');
const router = express.Router();
const score = require('../models/UserDetail');

router.post('/api', (req, res) => {
      score
        .create(req.body)
        .then((elem) => {
          res.send(elem);
        })
        .catch(() => res.status(404).send('data not added'));
})

router.get('/api', (req, res) => {
  score
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch(() => res.status(404).send('data fetched'));
});

    module.exports = router;