import express from "express";
import commentRoutes from "./comment.js";
import {
  getAllTweets,
  getTweetById,
  postTweet,
} from "../../controllers/tweetController.js";
import { validatePostTweet } from "../../middlewares/validation.js";

const router = express.Router();

// GET /tweet
router.get("/", getAllTweets);

// GET /tweet/:tweetId
router.get("/:tweetId", getTweetById);

router.post("/", validatePostTweet, postTweet);

router.use("/:tweetId/comments", commentRoutes); // Mount comment routes under /tweet/:tweetId/comments

export default router;
