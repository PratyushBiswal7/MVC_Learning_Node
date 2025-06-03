import express from "express";

const router = express.Router({ mergeParams: true }); // mergeParams allows access to parent route params

router.get("/", (req, res) => {
  // Here you would typically fetch comments from a database
  const tweetId = req.params.tweetId;
  res.json({ message: `Fetching all comments for tweet ID: ${tweetId} v2` });
});

router.get("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  const tweetId = req.params.tweetId;
  // Here you would typically fetch the comment from a database
  res.json({
    message: `Fetching comment: ${commentId} for tweet ID: ${tweetId} v2`,
  });
});

export default router;
