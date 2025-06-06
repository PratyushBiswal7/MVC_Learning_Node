import Tweet from "../schema/tweetSchema.js";

export const createTweet = async ({ body }) => {
  try {
    const tweet = await Tweet.create({ body });
    return tweet;
  } catch (error) {
    throw new Error("Error creating tweet: " + error.message);
  }
};

export const getTweets = async () => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 });
    return tweets;
  } catch (error) {
    throw new Error("Error fetching tweets: " + error.message);
  }
};
export const getTweetById = async (id) => {
  try {
    const tweet = await Tweet.findById(id);
    if (!tweet) {
      throw new Error("Tweet not found");
    }
    return tweet;
  } catch (error) {
    throw new Error("Error fetching tweet: " + error.message);
  }
};
