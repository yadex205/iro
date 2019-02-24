import { resolve } from 'path';
import express from 'express';

import Client from './mirakurun_client';

const app = express();
const client = new Client();

app.use('/', express.static(resolve(__dirname, './public')));

app.get('/api', async (req, res) => {
  try {
    res.json({ app_version: process.env.npm_package_version,
               mirakurun_version: (await client.version()).current });
  } catch (error) {
    res.json({ error: { message: 'Cannot obtain from Mirakurun' } });
  }
});

app.get('/api/channels', async (req, res) => {
  try {
    res.json(await client.channels());
  } catch (error) {
    res.json({ error: { message: 'Cannot obtain from Mirakurun' } });
  }
});

app.get('/api/programs', async (req, res) => {
  try {
    res.json(await client.programs());
  } catch (error) {
    res.json({ error: { message: 'Cannot obtain from Mirakurun' } });
  }
});

app.get('/api/tuners', async (req, res) => {
  try {
    res.json(await client.tuners());
  } catch (error) {
    res.json({ error: { message: 'Cannot obtain from Mirakurun' } });
  }
});

export default app;
