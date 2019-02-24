import { resolve } from 'path';
import express from 'express';

const DEFAULT_PORT = 8000;

const app = express();

app.use('/', express.static(resolve(__dirname, './public')));

app.get('/api', (req, res) => {
  res.send(resolve(__dirname, './public'));
});

app.listen(DEFAULT_PORT);
