import bsky from '@atproto/api';
const { BskyAgent } = bsky;
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import * as process from 'process';



dotenv.config();
const port = process.env.PORT || "8080";
// Create a Bluesky Agent 
const agent = new BskyAgent({
    service: 'https://bsky.social',
});
await agent.login({
    identifier: process.env.BLUESKY_USERNAME,
    password: process.env.BLUESKY_PASSWORD,
});



// Function to post "gm" to Bluesky
async function postGMToBluesky() {
    console.log("Posting 'gm' to Bluesky...");
    const response = await agent.post({
      text: "gm say it back...or else..."
    });
  }
// Run this on a cron job

const scheduleExpressionEveryDayAt9AMEST = '0 9 * * *'; // Run every day at 9 AM EST

const job = new CronJob({
  cronTime: scheduleExpressionEveryDayAt9AMEST,
  onTick: postGMToBluesky,
  timeZone: 'America/New_York', // Set timezone to Eastern Standard Time (EST)
});
job.start();
