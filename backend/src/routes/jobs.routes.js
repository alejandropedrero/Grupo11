import { Router } from "express";
import { getJobs, addJob } from "../controllers/jobs.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/jobs/:id", authenticateToken, getJobs);
router.put("/jobs/:id", authenticateToken, addJob);

export default router;
