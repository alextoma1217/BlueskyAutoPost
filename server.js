import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import bsky from '@atproto/api';
import { CronJob } from 'cron';
import * as process from 'process';

const { BskyAgent } = bsky;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const activeJobs = {};

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const agent = new BskyAgent({ service: 'https://bsky.social' });
    await agent.login({ identifier: username, password: password });
    res.status(200).send('Logged in successfully');
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(401).send('Invalid username or password');
  }
});

app.post('/schedule', async (req, res) => {
  const { username, password, message, time } = req.body;

  try {
    const agent = new BskyAgent({ service: 'https://bsky.social' });
    await agent.login({ identifier: username, password: password });

    const [hour, minute] = time.split(':');
    const scheduleExpression = `${minute} ${hour} * * *`;

    const job = new CronJob(scheduleExpression, async () => {
      console.log(`Posting message: "${message}" to Bluesky`);
      await agent.post({ text: message });
    });

    job.start();
    activeJobs[username] = job;

    res.status(200).send('Scheduled successfully');
  } catch (error) {
    console.error('Error scheduling the post:', error);
    res.status(500).send('Error scheduling the post.');
  }
});

app.post('/stop-schedule', (req, res) => {
  const { username } = req.body;
  const job = activeJobs[username];

  if (job) {
    job.stop();
    delete activeJobs[username];
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});