import express from "express";
import tweetRoutes from "./tweet.js";

const router = express.Router();

router.use("/tweets", tweetRoutes); // Mount tweet routes under /api/tweets

export default router;