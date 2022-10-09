import express from 'express';
import teachers from './api/teachers';
import students from './api/students';
import classroom from './api/classroom';
import logger from './logger';

const routes = express.Router();

routes.get('/',logger, (req, res) => {
  res.send('connected to main route');
});

routes.use('/teachers',logger,teachers);
routes.use('/students',logger,students);
routes.use('/classroom',logger,classroom);

export default routes;