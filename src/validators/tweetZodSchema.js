import { z } from "zod";

export const tweetZodSchema = z.object({
  content: z
    .string()
    .min(1, "Content is required")
    .max(280, "Content must be less than 280 characters"),
});
