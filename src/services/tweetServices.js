import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../repositories/tweetRepository.js";

export const createTweet = async ({ body }) => {
  const filter = new Filter();

  if (filter.isProfane(body)) {
    console.log(body);
    console.log(filter.clean(body));
    body = filter.clean(body);
    console.log("Profanity detected and cleaned:", body);
    // Optionally, you can throw an error or handle it as needed
    // throw new Error("Tweet contains inappropriate content");
  }
  const tweet = await createTweetRepository({ body });
  return tweet;
};
