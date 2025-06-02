import express from 'express';

const router = express.Router();

// GET /tweet
router.get('/', (req, res) => {
  // Here you would typically fetch tweets from a database
  res.json({ message: 'Fetching all tweets' });
});

// GET /tweet/:id
router.get('/:id', (req, res) => {
  const tweetId = req.params.id;
  // Here you would typically fetch the tweet from a database
  res.json({ message: `Fetching tweet with ID: ${tweetId}` });
});

export default router;