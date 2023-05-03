import { Router } from "express";
import {
  getRegister,
  validateRegister,
} from "../controllers/register.controller.js";

const router = Router();

router.get("/register", getRegister);
router.post("/register", validateRegister);

export default router;
