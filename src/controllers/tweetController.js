import { success } from "zod/v4";
import { createTweet as createTweetService } from "../services/tweetServices.js";

export const getAllTweets = (req, res) => {
  // Here you would typically fetch tweets from a database
  res.json({
    message: "Fetching all tweets v2",
  });
};

export const getTweetById = (req, res) => {
  const tweetId = req.params.tweetId;
  // Here you would typically fetch the tweet from a database
  res.json({
    message: `Fetching tweet with ID: ${tweetId} v2`,
  });
};

export const postTweet = async (req, res) => {
  const { content } = req.body || {};
  try {
    const response = await createTweetService({
      body: content, // body: req.body.body
    });
    return res.status(201).json({
      message: "Tweet created successfully",
      tweet: response,
      success: true,
    });
  } catch (error) {
    console.error("Error creating tweet:", error);
    return res
      .status(500)
      .json({ error: "Internal Server Error", success: false });
  }
};
