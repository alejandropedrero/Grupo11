import { Router } from "express";
import { addFeedback } from "../controllers/feedback.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.post("/feedback", authenticateToken, addFeedback);

export default router;
