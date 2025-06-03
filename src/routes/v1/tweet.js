import express from 'express';
import commentRoutes from './comment.js';
const router = express.Router();

// GET /tweet
router.get('/', (req, res) => {
  // Here you would typically fetch tweets from a database
  res.json({ message: 'Fetching all tweets' });
});

// GET /tweet/:tweetId
router.get('/:tweetId', (req, res) => {
  const tweetId = req.params.tweetId;
  // Here you would typically fetch the tweet from a database
  res.json({ message: `Fetching tweet with ID: ${tweetId}` });
});

router.use("/:tweetId/comments", commentRoutes); // Mount comment routes under /tweet/:tweetId/comments

export default router;