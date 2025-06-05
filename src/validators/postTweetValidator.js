export const validatePostTweet = (req, res, next) => {
  const { content } = req.body;
  if (!content || content.trim().length === 0) {
    return res.status(400).json({ error: "Content is required" });
  }

  if (content.length > 280) {
    return res
      .status(400)
      .json({ error: "Content must be less than 280 characters" });
  }
  next();
};
