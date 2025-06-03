export const getAllComments =(req, res) => {
  // Here you would typically fetch comments from a database
  const tweetId = req.params.tweetId;
  res.json({ message: `Fetching all comments for tweet ID: ${tweetId} v2` });
};

export const getCommentById = (req, res) => {
  const { tweetId, commentId } = req.params;
  // Here you would typically fetch the comment from a database
  res.json({
    message: `Fetching comment with ID: ${commentId} for tweet ID: ${tweetId} v2`,
  });
};
