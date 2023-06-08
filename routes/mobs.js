const express = require('express');
const { v4: uuidv4 } = require('uuid');
let mobs = [];

const router = express.Router();

//GET all mobs
router.get('/mobs', (req, res) => {
  res.json();
});

//GET a particular mob
router.get('/mobs/:mobId', (req, res) => {
  const mobId = req.params.mobId;
  const mob = mob.find((mob) => mob.id = mobId);
  if (mob) {
    res.json(mob);
  } else {
    res.status(404).json({ message: 'Mob not found.' });
  }
});

//POST a new mob
router.post('/mobs', (req, res) => {
  const { name } = req.body;
  const newMob = 
  {
    id: uuidv4(),
    name: name
  };
  mobs.push(newMob);
  res.status(201).json(newMob);
});

module.exports = router;
