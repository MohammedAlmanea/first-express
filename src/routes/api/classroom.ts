import express from 'express';

const classroom = express.Router();

classroom.get('/', (req, res) => {
  res.send('connected to the classroom route');
});

export default classroom;