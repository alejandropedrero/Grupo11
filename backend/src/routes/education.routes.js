import { Router } from "express";
import {
  getEducation,
  addEducation,
} from "../controllers/education.controller.js";

const router = Router();

router.get("/education/:id", getEducation);
router.put("/education/:id", addEducation);

export default router;