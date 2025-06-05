import express from "express";
import commentRoutes from "./comment.js";
import {
  getAllTweets,
  getTweetById,
  postTweet,
} from "../../controllers/tweetController.js";
import { validatePostTweet } from "../../validators/postTweetValidator.js";
import validator from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";

const router = express.Router();

// GET /tweet
router.get("/", getAllTweets);

// GET /tweet/:tweetId
router.get("/:tweetId", getTweetById);

// router.post("/", validatePostTweet, postTweet); //manually validate the request body

router.post("/", validator(tweetZodSchema), postTweet); // Automatically validate the request body using Zod schema

router.use("/:tweetId/comments", commentRoutes); // Mount comment routes under /tweet/:tweetId/comments

export default router;
