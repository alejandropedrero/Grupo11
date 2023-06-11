import { Router } from "express";
import {
  getJobs,
  updateJobs,
} from "../controllers/jobs.controller.js";

const router = Router();

router.get("/jobs/:id", getJobs);
router.patch("/jobs/:id", updateJobs);

export default router;