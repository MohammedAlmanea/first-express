import express from 'express';
import teachers from './api/teachers';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('connected to main route');
});

routes.use('/teachers',teachers);
export default routes;