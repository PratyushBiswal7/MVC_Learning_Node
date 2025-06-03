import express from "express";
import commentRoutes from "./comment.js";
import { getAllTweets, getTweetById } from "../../controller/tweetContoller.js";

const router = express.Router();

// GET /tweet
router.get("/", getAllTweets);

// GET /tweet/:tweetId
router.get("/:tweetId", getTweetById);

router.use("/:tweetId/comments", commentRoutes); // Mount comment routes under /tweet/:tweetId/comments

export default router;
