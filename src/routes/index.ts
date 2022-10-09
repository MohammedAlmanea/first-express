import express from 'express';
import teachers from './api/teachers';
import students from './api/students';
import classroom from './api/classroom';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('connected to main route');
});

routes.use('/teachers',teachers);
routes.use('/students',students);
routes.use('/classroom',classroom);

export default routes;