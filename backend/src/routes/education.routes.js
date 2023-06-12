import { Router } from "express";
import {
  getEducation,
  addEducation,
} from "../controllers/education.controller.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = Router();

router.get("/education/:id", authenticateToken, getEducation);
router.put("/education/:id", authenticateToken, addEducation);

export default router;
