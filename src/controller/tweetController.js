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
