import express from "express";
import v1Routes from "./v1/v1.js";
import v2Routes from "./v2/v2.js";

const router = express.Router();

router.use("/v1", v1Routes); // Mount v1 routes under /api/v1
router.use("/v2", v2Routes); // Mount v2 routes under /api/v2

export default router;