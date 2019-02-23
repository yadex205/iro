import { resolve } from 'path';
import express from 'express';

const app = express();

app.use('/', express.static(resolve(__dirname, './public')));

app.get('/api', (req, res) => {
  res.send(resolve(__dirname, './public'));
});

app.listen(8000);
