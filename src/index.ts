import express from 'express';

const app = express();
const port = 3000;

//set Endpoint
app.get('/api', (req, res) => {
  res.send('This is the /api route ');
});

app.get('', (req, res) => {
  res.send('server working!');
});

//check for port to avoid already in use error testing
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
export default app