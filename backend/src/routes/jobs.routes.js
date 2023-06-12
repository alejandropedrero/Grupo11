import { Router } from "express";
import {
  getJobs,
  addJob,
} from "../controllers/jobs.controller.js";

const router = Router();

router.get("/jobs/:id", getJobs);
router.put("/jobs/:id", addJob);

export default router;