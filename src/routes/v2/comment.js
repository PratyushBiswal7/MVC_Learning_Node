import express from "express";
import { getAllComments,getCommentById } from "../../controller/commentController.js";

const router = express.Router({ mergeParams: true }); // mergeParams allows access to parent route params

router.get("/", getAllComments);
router.get("/:commentId", getCommentById);

export default router;
