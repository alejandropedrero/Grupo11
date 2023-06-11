import { Router } from "express";
import {
  getEducation,
  updateEducation,
} from "../controllers/education.controller.js";

const router = Router();

router.get("/education/:id", getEducation);
router.patch("/education/:id", updateEducation);

export default router;