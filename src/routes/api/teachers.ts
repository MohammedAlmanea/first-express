import express from 'express';

const teachers = express.Router();

teachers.get('/', (req, res) => {
  res.send('connected to teachers route!');
});

export default teachers;
