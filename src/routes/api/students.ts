import express from 'express';

const students = express.Router();

students.get('/', (req, res) => {
  res.send('connected to students route!');
});

export default students; 