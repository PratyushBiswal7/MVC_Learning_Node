import express from "express";
import v1Routes from "./v1/v1.js";

const router = express.Router();

router.use("/v1", v1Routes); // Mount v1 routes under /api/v1

export default router;