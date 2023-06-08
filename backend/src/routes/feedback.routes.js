import { Router } from "express";
import { addFeedback } from "../controllers/feedback.controller.js";

const router = Router();

router.post("/feedback", addFeedback);

export default router;
