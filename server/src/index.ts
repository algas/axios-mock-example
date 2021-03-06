import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/user/:user', (req, res) => {
  const userName = req.params.user || 'World';
  res.json({user: userName});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
