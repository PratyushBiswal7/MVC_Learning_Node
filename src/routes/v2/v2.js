import express from 'express';
import tweetRoutes from './tweet.js';
const router = express.Router();

router.use("/tweets", tweetRoutes);

export default router;